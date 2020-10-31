import { GenIcon, IconBaseProps, IconTree, IconType } from 'react-icons';
import xstateIconJson from './xstate-icon.json';

const XStateIcon: IconType = (props: IconBaseProps) => GenIcon((xstateIconJson as unknown) as IconTree)(props);

export default XStateIcon;
