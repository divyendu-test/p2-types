import { Photon } from '@prisma/photon'

const photon = new Photon()

async function createUser(email) {
  const data = photon.users.create({
    data: {
      email,
    },
    select: {
      name: true,
      email: true,
    },
  })
  return data
}

async function main() {
  // With await, ThenArg unwraps the Promise as we are using await
  const user: ThenArg<ReturnType<typeof createUser>> = await createUser(
    'alice@prisma.io',
  )
  console.log(user.email, user.name)
}

type ThenArg<T> = T extends PromiseLike<infer U> ? U : T

main()
