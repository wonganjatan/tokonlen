export interface CartItemResponse {
    cartItemId: number
    userId: number
    productId: number
    quantity: number
    createdAt: string
}

export interface CartItemRequest {
    productId: number
    quantity: number
}