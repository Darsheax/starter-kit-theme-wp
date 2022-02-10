export interface Account {
    ids: number
    displayName: string
    version: 1
}

export function welcome(user: Account) {
    console.log(`Bienvenue ${user.displayName} - ${user.ids}`)
}