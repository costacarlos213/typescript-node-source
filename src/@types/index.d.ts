declare type ExpressUser = {
  id: string
}

declare namespace Express {
  interface Request { // eslint-disable-line
    user: ExpressUser
  }
}
