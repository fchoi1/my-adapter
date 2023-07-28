// @ts-nocheck

import MyAdapter from "./adapter-full"

let user: any = {
  email: "fill@murray.com",
  // image: "https://www.fillmurray.com/460/300",
  name: "Fill Murray",
  emailVerified: new Date(),
}
const adapter = MyAdapter()

adapter.createUser(user)
