import React, { Fragment } from 'react'

export default {
  usefulContent: {
    description: 'Deno 0.36.0 includes 2 breaking changes.',
    links: [
      {
        title: 'Remove Deno.errors.Other',
        url: 'https://github.com/denoland/deno/pull/4249'
      },
      {
        title: 'Rename readDir -> readdir',
        url: 'https://github.com/denoland/deno/pull/4225'
      }
    ]
  },
  comments: [
    {
      fileName: 'lib.deno.ns.d.ts',
      lineNumber: 237,
      lineChangeType: 'add',
      content: (
        <Fragment>
          Rename `readDir` -> `readdir`, [see
          more](https://github.com/denoland/deno/pull/4225).
        </Fragment>
      )
    }
  ]
}
