import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import { buildTags } from "./tags"

const NewsItem = ({ post }) => {
  const { id, excerpt } = post
  const { title, author, date, tags, image } = post.frontmatter
  const { slug } = post.fields

  return (
    <article>
      <Link to={slug}>
        <h2>{title}</h2>
        <div className="news-item-info">
          <span>{author}</span>
          <time>{date}</time>
          <ul>{buildTags(tags)}</ul>
        </div>
        <div className="news-item-thumbnail">
          <Image name={image.relativePath} alt={`${title} Image`} />
        </div>
        <p>{excerpt}</p>
      </Link>
    </article>
  )
}

function buildNewsItems(posts) {
  return posts.map(post => <NewsItem post={post} />)
}

const NewsRoll = ({ posts }) => {
  return (
    <div className="news-roll">
      <ul>
        {posts &&
          posts.map(post => <NewsItem key={post.fields.slug} post={post} />)}
      </ul>
    </div>
  )
}

export default NewsRoll
