import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <div>
      <h1>新着記事</h1>
      <ul>
        <li>記事１</li>
        <li>記事２</li>
        <li>記事３</li>
      </ul>
    </div>
  )
}
