import { Hono } from 'hono';
import {userRouters} from './routes/user';
import { blogRouters } from './routes/blog';



const app = new Hono()

app.route('/api/v1/user', userRouters)
app.route('/api/v1', blogRouters)

export default app





