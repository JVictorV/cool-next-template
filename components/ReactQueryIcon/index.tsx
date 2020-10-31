import { GenIcon, IconBaseProps, IconTree, IconType } from 'react-icons';
import reactQueryIconJson from './react-query-icon.json';

const ReactQueryIcon: IconType = (props: IconBaseProps) => GenIcon((reactQueryIconJson as unknown) as IconTree)(props);

export default ReactQueryIcon;
