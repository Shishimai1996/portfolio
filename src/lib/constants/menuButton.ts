import { HeartButton } from '../../component/heartButton'
import { TranslationButton } from '../../component/translationButton'

interface IMenuButton {
  Component: React.FC<any>
  title: string
}
export const menuButton: IMenuButton[] = [
  {
    Component: HeartButton,
    title: 'like',
  },
  {
    Component: TranslationButton,
    title: 'translate',
  },
]
