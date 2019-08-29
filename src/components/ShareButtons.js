import React from "react"
import { StaticQuery, graphql } from "gatsby"
import {
  //Share Buttons
  FacebookShareButton, //
  TwitterShareButton, //
  PinterestShareButton, //
  RedditShareButton, //
  WhatsappShareButton,
  EmailShareButton,
  //Counts
  FacebookShareCount,
  PinterestShareCount,
  RedditShareCount,
  // Icons
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  WhatsappIcon,
  RedditIcon,
  EmailIcon,
} from "react-share"

import { cleanTag } from "./tags"

const ShareButtons = ({ baseUrl, post, logoSize }) => {
  const { slug } = post.fields
  const { title, tags, image, subtitle } = post.frontmatter

  const shareUrl = baseUrl + slug
  const description = post.frontmatter.description || post.excerpt

  const titleStr = subtitle ? `${title} - ${subtitle}` : `${title}`

  const iconStyle = { fill: "#333" }
  return (
    <div className="share-btns-container">
      <ul className="share-btns">
        <li className="has-counter">
          <FacebookShareButton
            url={shareUrl}
            quote={titleStr}
            hashtag={tags.length > 0 ? `#${cleanTag(tags[0])}` : `#RevolverInc`}
            className="share-btn"
          >
            <FacebookIcon round size={logoSize} iconBgStyle={iconStyle} />
          </FacebookShareButton>

          <FacebookShareCount url={shareUrl} className="share-count">
            {count => (
              <>
                {count}
                <br />
                shares
              </>
            )}
          </FacebookShareCount>
        </li>
        <li className="has-counter">
          <PinterestShareButton
            url={shareUrl}
            media={baseUrl + image.publicURL}
            description={description}
            className="share-btn"
          >
            <PinterestIcon size={logoSize} round iconBgStyle={iconStyle} />
          </PinterestShareButton>
          <PinterestShareCount url={shareUrl} className="share-count">
            {count => (
              <>
                {count}
                <br />
                shares
              </>
            )}
          </PinterestShareCount>
        </li>

        <li className="has-counter">
          <RedditShareButton
            url={shareUrl}
            title={titleStr}
            className="share-btn"
          >
            <RedditIcon size={logoSize} round iconBgStyle={iconStyle} />
          </RedditShareButton>
          <RedditShareCount url={shareUrl} className="share-count">
            {count => (
              <>
                {count}
                <br />
                shares
              </>
            )}
          </RedditShareCount>
        </li>
        <li>
          <TwitterShareButton
            url={shareUrl}
            title={titleStr}
            hashtags={
              tags.length > 0
                ? tags.map(tag => `#${cleanTag(tag)}`)
                : `#RevolverInc`
            }
            className="share-btn"
          >
            <TwitterIcon size={logoSize} round iconBgStyle={iconStyle} />
          </TwitterShareButton>
        </li>

        <li>
          <WhatsappShareButton
            url={shareUrl}
            title={titleStr}
            separator=":: "
            className="share-btn"
          >
            <WhatsappIcon size={logoSize} round iconBgStyle={iconStyle} />
          </WhatsappShareButton>
        </li>
        <li>
          <EmailShareButton
            url={shareUrl}
            subject={`${titleStr} - Revolver Inc.`}
            body={`
              I was surfing along on revolver-inc.ca and I thought you would enjoy this!
              Title: ${titleStr}
              Description: ${description}
            `}
            className="share-btn"
          >
            <EmailIcon size={logoSize} round iconBgStyle={iconStyle} />
          </EmailShareButton>
        </li>
      </ul>
    </div>
  )
}

export default ({ post, logoSize = 32 }) => (
  <StaticQuery
    query={graphql`
      query siteUrlQuery {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `}
    render={data => (
      <ShareButtons
        baseUrl={data.site.siteMetadata.siteUrl}
        post={post}
        logoSize={logoSize}
      />
    )}
  />
)
