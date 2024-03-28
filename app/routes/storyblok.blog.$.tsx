import {useLoaderData} from '@remix-run/react';
import {json, LoaderFunctionArgs} from '@remix-run/server-runtime';
import {
  getStoryblokApi,
  StoryblokComponent,
  useStoryblokState,
} from '@storyblok/react';

export const loader = async ({params}: LoaderFunctionArgs) => {
  const slug = params['*'] ?? 'home';
  const storyblok = getStoryblokApi();
  // patchStoryblokApiInstance(storyblok, 5);
  const {data} = await storyblok.get(`cdn/stories/blog/${slug}`, {
    version: 'draft',
  });

  return json({story: data?.story ?? null, ok: true});
};
export default function StoryblokBlogPage() {
  const loaderData = useLoaderData<typeof loader>();
  const story = useStoryblokState(loaderData.story);
  return <StoryblokComponent blok={story?.content} />;
}
