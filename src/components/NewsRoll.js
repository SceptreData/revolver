import React, { useEffect } from "react"
import { Link } from "gatsby"
import moment from "moment"

import Image from "../components/image"
import { buildTags } from "./tags"
import ShareButtons from "./ShareButtons"

const NewsItem = ({ post }) => {
  const { id, excerpt } = post
  const { title, author, date: dateStr, tags, image } = post.frontmatter
  const { slug } = post.fields

  const date = moment(dateStr).format("DD MMMM, YYYY")
  console.log(date)
  return (
    <article className="news-item">
      <Link to={slug}>
        <h2>{title}</h2>
      </Link>
      <div className="news-item-info">
        <span>
          Author: <span className="news-item-author">{author}</span>
        </span>
        <time>{date}</time>
        <ul>{buildTags(tags)}</ul>
      </div>
      <div className="news-item-thumbnail">
        <Image name={image.relativePath} alt={`${title} Image`} />
      </div>
      <p>{excerpt}</p>
      <ShareButtons post={post} logoSize={"1.5rem"} />
    </article>
  )
}

const NewsRoll = ({ posts }) => {
  return (
    <div className="news-roll-container">
      <ul className="news-roll">
        {posts &&
          posts.map(post => <NewsItem key={post.fields.slug} post={post} />)}
      </ul>
    </div>
  )
}

export default NewsRoll
