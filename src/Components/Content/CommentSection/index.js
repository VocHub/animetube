import { DiscussionEmbed } from "disqus-react"
import { MAINSITE } from "../../../constants"

function CommentSection({
	animeId,
	animeTitle,
	language,
	headingTitle,
	route,
}) {
	const disqusShortname = "unime-anime-vercel"
	const disqusConfig = {
		url: `${MAINSITE}/${route}/${animeId}`,
		identifier: `${animeId}-comment`,
		title: animeTitle,
		language: language,
	}
	return (
		<div className="article-container">
			<h4 className="font-black">{headingTitle}</h4>
			<DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
		</div>
	)
}

export default CommentSection
