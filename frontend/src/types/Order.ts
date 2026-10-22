export interface Order {
    id: number
    userId: number
    createdAt: Date
    items: OrderItem[]
}

export interface OrderItem {
    id: number
    orderId: number
    order: Order
    productId: number
    quantity: number
}