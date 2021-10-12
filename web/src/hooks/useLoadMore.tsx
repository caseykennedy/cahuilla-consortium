// useLoadMore hook
// Hook for slicing and loading more items from an array

import React, { useState, useEffect, useCallback } from 'react'

// ___________________________________________________________________

const maxPosts = 8

// Hook
const useLoadMore = (posts: any) => {
  // State for the list
  const [list, setList] = useState([...posts.slice(0, maxPosts)])
  // State to trigger oad more
  const [loadMore, setLoadMore] = useState(false)
  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(posts.length > maxPosts)
  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < posts.length
      const nextResults = isMore
        ? posts.slice(currentLength, currentLength + maxPosts)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) // eslint-disable-line

  // Check if there is more
  useEffect(() => {
    const isMore = list.length < posts.length
    setHasMore(isMore)
  }, [list]) // eslint-disable-line

  return { list, handleLoadMore, hasMore }
}

export default useLoadMore
