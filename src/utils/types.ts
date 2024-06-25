interface RestaurantModel {
  account: {
    account_id: number
    account_name: string
    account_email: string
    account_access: string
    account_last_active: number
    account_subscription: boolean
    account_subscription_name: string
    account_subscription_expired: number
    account_subscription_id: number
    account_payment_method: string
  }
  resto: {
    resto_id: number
    resto_image: string
    resto_name: string
    resto_address: string
    resto_contact: string
    resto_country: string
    resto_currency: string
    resto_slug: string
    resto_order_method: number
    resto_transaction_today: number
    resto_menu: number
  }
}

interface NoteModel {
  note: {
    note_id: number
    title: string
    note1: string
    note2: string
    desc: string
    img?: string
    type: string
  }
  detail: {
    note_id: number
    title: string
    type: string
    status: string
    desc: string
    img: string
  }
}

interface UserInformationModel {
  users: {
    total_user: number
    active_user: number
    inactive_user: number
  }
  joined: {
    join_today: number
  }
  packet: {
    premium: number
    free: number
    trial: number
  }
}

export type { NoteModel, RestaurantModel, UserInformationModel }
