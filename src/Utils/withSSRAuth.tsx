import { parseCookies } from 'nookies';
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

export function withSSRAuth<P>(fn: GetServerSideProps<P>) {

  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {

    const cookies = parseCookies(ctx);
    if (!cookies['noploy.token']) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      }
    }

    return await fn(ctx);
  }

}