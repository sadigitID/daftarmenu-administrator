interface RestaurantModel {
  account: {
    account_id: number
    account_name: string
    account_email: string
    account_access: string
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
  title: string
  note1: string
  note2: string
  desc: string
  img?: string
  type: string
}

export type { NoteModel, RestaurantModel }
