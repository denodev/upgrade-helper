import React, { Fragment } from 'react'

export default {
  usefulContent: {
    description: 'Deno 0.37.0 includes 2 breaking changes.',
    links: [
      {
        title: 'FileInfo.len renamed to FileName.size',
        url: 'https://github.com/denoland/deno/pull/4338'
      },
      {
        title: "Rename Deno.run's args to cmd",
        url: 'https://github.com/denoland/deno/pull/4444'
      }
    ]
  },
  comments: [
    {
      fileName: 'lib.deno.ns.d.ts',
      lineNumber: 282,
      lineChangeType: 'add',
      content: (
        <Fragment>
          `FileInfo.len` renamed to `FileName.size`, [see
          more](https://github.com/denoland/deno/pull/4338).
        </Fragment>
      )
    },
    {
      fileName: 'lib.deno.ns.d.ts',
      lineNumber: 541,
      lineChangeType: 'add',
      content: (
        <Fragment>
          Rename `Deno.run`'s `args` to `cmd`, [see
          more](https://github.com/denoland/deno/pull/4444).
        </Fragment>
      )
    }
  ]
}
