import { withSSRAuth } from './../../Utils/withSSRAuth';

export default function Profile() {
  return (
    <h1>VITOR PRETO</h1>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {}
  }
});