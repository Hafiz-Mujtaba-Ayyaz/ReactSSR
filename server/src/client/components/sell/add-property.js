import * as styles from './add-property.module.scss';
import Button from '../common/button';
import { IconSetting } from '../common/svg-icons';

function AddProperty({ ...props }) {
  return (
    <div className={styles.addProperty}>
      <IconSetting className={`${styles.settingIcon} u-mb16`} />
      <p className="u-mb16">This feature is currently under maintenance. It will be live very soon.</p>
      <Button onClick={props.onClickClose} variant="primaryBtn">Continue</Button>
    </div>
  );
}

export default AddProperty;
