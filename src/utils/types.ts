interface RestaurantModel {
  account: {
    account_name: string
    account_email: string
    account_access: string
    account_subscription: boolean
    account_subscription_name: string
    account_subscription_expired: number
    account_subscription_id: number
  }
  restaurant: {
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

export type { RestaurantModel }
