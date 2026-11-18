import { useEffect, useState } from "react"
import type { Order } from "../../types/Order"
import { ordersApi } from "../../api/orders"

export default function Order() {
    const [orders, setOrders] = useState<Order[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const orders = await ordersApi.getAll()
                setOrders(orders)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchOrders()
    }, [])

    if (orders == null) {
        return <p>Orders not found</p>
    }

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            {orders.map(order => (
                <div>
                    <p>{order.id}</p>
                    <p>{order.userId}</p>
                    <p>{order.createdAt.toLocaleDateString()}</p>
                    {order.items.map(item => (
                        <div>
                            <p>{item.id}</p>
                            <p>{item.orderId}</p>
                            <p>{item.productId}</p>
                            <p>{item.quantity}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}