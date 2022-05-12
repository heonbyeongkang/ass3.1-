import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h1>
      <h1>강병헌</h1>
      <h1>과제 소요시간: 5시간 40분</h1>
      <h1>체중: 약 70키로</h1>
      <h1>MBTI: ENTP </h1>
    </>
  );
}