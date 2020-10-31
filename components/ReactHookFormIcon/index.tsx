import { GenIcon, IconBaseProps, IconTree, IconType } from 'react-icons';
import reactHookFormIcon from './react-hook-form-icon.json';

const ReactHookFormIcon: IconType = (props: IconBaseProps) =>
	GenIcon((reactHookFormIcon as unknown) as IconTree)(props);

export default ReactHookFormIcon;
