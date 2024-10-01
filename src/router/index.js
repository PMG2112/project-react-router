import React from 'react'
import About from '../pages/About';
import Posts from '../pages/Posts';
import PostIdPage from '../pages/PostIdPage';
import { useRoutes } from 'react-router-dom';

// export const privRo = () => {
//  const privateRoute = useRoutes([
//         {
//             path: "about", element: <About/>,
//         },
//         {
//             path: "posts", element: <Posts/>,
//         },
//         {
//             path:"posts/:id", element: <PostIdPage/>,
//         },
//         {
//           path:"/", element: <Posts/>,
//         },
//         {
//           path:"*", element: <Error/>,
//       },
//     ]);
//     return privateRoute
// }