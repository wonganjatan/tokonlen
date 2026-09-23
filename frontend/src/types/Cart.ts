export interface CartItemResponse {
    cartItemId: string
    userId: string
    productId: number
    quantity: number
    createdAt: string
}

export interface CartItemRequest {
    productId: number
    quantity: number
}