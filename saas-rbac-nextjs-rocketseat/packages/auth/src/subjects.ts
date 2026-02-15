import { z } from 'zod'

import { organizationSchema } from './models/organization'
import { projectSchema } from './models/project'

export const subjects = z.union([
  z.tuple([z.literal('manage'), z.literal('all')]),
  z.tuple([z.literal('create'), z.literal('invite')]),
  z.tuple([z.literal('delete'), z.literal('invite')]),

  z.tuple([
    z.literal('create'),
    z.union([z.literal('project'), projectSchema]),
  ]),
  z.tuple([z.literal('get'), z.union([z.literal('project'), projectSchema])]),
  z.tuple([
    z.literal('update'),
    z.union([z.literal('project'), projectSchema]),
  ]),
  z.tuple([
    z.literal('delete'),
    z.union([z.literal('project'), projectSchema]),
  ]),

  z.tuple([
    z.literal('update'),
    z.union([z.literal('organization'), organizationSchema]),
  ]),
  z.tuple([
    z.literal('delete'),
    z.union([z.literal('organization'), organizationSchema]),
  ]),
])

export type Subjects = z.infer<typeof subjects>
