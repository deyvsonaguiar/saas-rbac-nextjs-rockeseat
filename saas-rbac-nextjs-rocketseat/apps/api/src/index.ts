import { ability } from '@saas/auth'

const userCanInviteOthers = ability.can("invite", "User")
const userCanDeleteOtherUser = ability.can("delete", "User")
const userCannotDeleteOtherUser = ability.cannot("delete", "User")
console.log(userCanInviteOthers)
console.log(userCanDeleteOtherUser)
console.log(userCannotDeleteOtherUser)
