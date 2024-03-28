import {useLoaderData} from '@remix-run/react';
import {json, LoaderFunctionArgs} from '@remix-run/server-runtime';
import {
  getStoryblokApi,
  StoryblokComponent,
  useStoryblokState,
} from '@storyblok/react';

export const loader = async ({params}: LoaderFunctionArgs) => {
  try {
    const slug = params['*'] ?? 'home';
    // const storyblok = getStoryblokApi();
    // // patchStoryblokApiInstance(storyblok, 5);
    // const {data} = await storyblok.get(`cdn/stories/blog/${slug}`, {
    //   version: 'draft',
    // });
    const response = await fetch(
      `https://api-us.storyblok.com/v2/cdn/stories/blog/${slug}?token=rdO2KxjY01KU03K9Y7X4vAtt&version=draft`,
    );
    const data = await response.json();

    return json({story: data?.story ?? null, ok: true});
  } catch (error) {
    console.log(error);

    return json({story: null, ok: false});
  }
};
export default function StoryblokBlogPage() {
  const loaderData = useLoaderData<typeof loader>();
  const story = loaderData.story;
  return <StoryblokComponent blok={story?.content} />;
}
