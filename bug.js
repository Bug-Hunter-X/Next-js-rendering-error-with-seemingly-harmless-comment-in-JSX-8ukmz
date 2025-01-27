```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      {/* This comment is crucial for the bug to occur */}
    </div>
  );
}
```