import { Suspense } from 'react';
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements, Link } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Add from './pages/add/Add';
import Gig from './pages/gig/Gig';
import Gigs from './pages/gigs/Gigs';
import MyGigs from './pages/myGigs/MyGigs';
import Order from './pages/order/Order';
import Message from './pages/message/Message';
import Messages from './pages/messages/Messages';
import Signin from './pages/Signin';
import Home from './pages/home/Home';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import './App.scss';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import AllPosts from './components/posts/AllPosts';
import AddNewPost from './components/posts/AddNewPost';


export const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index path='/' element={<Home />} />
      <Route index path='/gigs' element={
        <ErrorBoundary fallback="Something went wrong...">
          <Suspense fallback="Loading...">
            <Gigs />
          </Suspense>
        </ErrorBoundary>
      } />
      <Route index path='/gig/:id' element={<Gig />} />
      <Route index path='/order' element={<Order />} />
      <Route index path='/mygigs' element={<MyGigs />} />
      <Route index path='/add' element={<Add />} />
      <Route index path='/message' element={<Message />} />
      <Route index path='/messages' element={<Messages />} />
      <Route path='hotel' element={<Dashboard />} />
      <Route path='signin' element={<Signin />} />
      <Route path='*' element={<NoMatch />} />
      <Route path='posts' element={<AllPosts />} />
      <Route path='addnewpost' element={<AddNewPost />} />
    </Route>
  )
)

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </div>    
    </QueryClientProvider>
  )
}

export default App



function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}