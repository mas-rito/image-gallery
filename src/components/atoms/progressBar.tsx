"use client"

import { AppProgressBar } from "next-nprogress-bar"

export const ProgressBar = () => {
  return (
    <AppProgressBar
      height="4px"
      color="#DC2626"
      options={{ showSpinner: false }}
      shallowRouting
    />
  )
}
