import {
	buildAwardsQuery,
	buildBannerQuery,
	buildPostSlugsQuery,
	buildPostsListQuery,
	postBySlugQuery,
} from '@shawnphoffman/pod-sites-shared/sanity'

const podId = '6c03379a-0584-4e22-9fd2-12525f75e6af'

export const postsListQuery = buildPostsListQuery(podId)
export const postSlugsQuery = buildPostSlugsQuery(podId)
export { postBySlugQuery }
export const BANNER_QUERY = buildBannerQuery(podId)
export const AWARDS_QUERY = buildAwardsQuery(podId)
