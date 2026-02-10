import type { AbilityBuilder } from '@casl/ability'

import type { AppAbility } from '.'
import type { User } from './models/user'
import type { Role } from './roles'

type PermissionsByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>,
) => void

export const permissions: Record<Role, PermissionsByRole> = {
  ADMIN() {},
  MEMBER(_, { can }) {
    can('manage', 'Project')
    can('transfer_ownership', 'Organization')
  },
  BILLING() {},
}
