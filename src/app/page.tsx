import db from '@/modules/db'
import { faker } from '@faker-js/faker';
import { revalidatePath } from 'next/cache';
import Button from '@/app/components/button';
export default async function Home() {


  const generatePosts = async () => {
    'use server';
    await db.post.createMany({
      data: [
        {content: faker.lorem.sentence()},
        {content: faker.lorem.sentence()},
        {content: faker.lorem.sentence()},
        {content: faker.lorem.sentence()}
      ]
    })
    revalidatePath('/')
  }

  const posts = await db.post.findMany({orderBy: {createdAt: 'desc'}})
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button
        onClick={generatePosts}
      >Generate Postsss</Button>
      posts length {posts.length}
      {posts.map((post) => (
        <div key={post.id}>{post.content}</div>
      ))}
    </main>
  )
}
