import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/insights/$postId')({
  beforeLoad: ({ params }) => {
    throw redirect({
      to: '/intel/$postId',
      params: { postId: params.postId },
      statusCode: 301, // permanent redirect (SEO-safe)
    })
  },
})