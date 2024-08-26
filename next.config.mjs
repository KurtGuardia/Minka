import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { join } from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [
      join(
        dirname(fileURLToPath(import.meta.url)),
        'src/styles',
      ),
    ],
    prependData: `@import "globals.scss";`,
  },
}

export default nextConfig
