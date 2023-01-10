// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const reqMethod = req.method;
  console.log('body', req.body);
  console.log('query', req.query);

  switch (reqMethod) {
    case 'GET':

    default:
      res.status(200).json({ name: 'John Doe' })
  }


}
