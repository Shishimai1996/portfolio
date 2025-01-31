import { HeartButton } from '../../component/heartButton'
import { TranslationButton } from '../../component/translationButton'

interface IMenuButton {
  Component: (({ isHeartClicked, handleClickHeart, }: { isHeartClicked: boolean; handleClickHeart: () => void; }) => React.JSX.Element) | (({ handleLanguageToggle, }: { handleLanguageToggle: () => void; }) => React.JSX.Element)
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
