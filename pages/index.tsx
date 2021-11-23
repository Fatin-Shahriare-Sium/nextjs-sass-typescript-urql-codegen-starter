import React from 'react'
import { withUrqlClient } from 'next-urql';
const index = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
            <p style={{ fontSize: '4rem', fontWeight: '700', lineHeight: '7rem' }}>Allah is Almighty</p>
            <p style={{ fontSize: '2rem', fontWeight: '500', color: '#05FF00' }}>Nextjs + Sass + TypeScript + urql + graphQL codegen</p>
        </div>
    )
}

export default withUrqlClient(() => ({ url: 'http://localhost:5000/' }))(index);
