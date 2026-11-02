import { BODY_HTML } from './content';

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />;
}
