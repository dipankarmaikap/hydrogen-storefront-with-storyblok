import {StoryblokComponent, storyblokEditable} from '@storyblok/react';

export default function BlogArticle({blok}) {
  const {_uid: uid, heroSection, footer, tags, body, title, socialShare} = blok;
  return (
    <article {...storyblokEditable(blok)} key={uid} className="lg:px-7">
      {heroSection?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      <div className="mb-30 mt-10 md:mx-auto">
        <h1 className="lg:md:whitespace-pre-lin mb-3 whitespace-pre-line text-left !font-portonovotext  md:mb-20 md:whitespace-pre-wrap">
          {title}
        </h1>
        {tags && (
          <div className="mb-10 flex">
            {tags.map((tag) => (
              <div
                className="mr-3 rounded-xl border px-3 py-1 text-right font-bold uppercase text-deepnavy"
                key={tag}
              >
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>

      {body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}

      {footer?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </article>
  );
}
