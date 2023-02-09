// Write your code here
import './index.css'

const TabItem = props => {
  const {tab, updateActiveTabId, isActive} = props
  const {displayText, tabId} = tab
  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  const tabBtnClassName = isActive ? `tab-light` : ' '

  return (
    <li className="tab-list">
      <button
        type="button"
        className={`tab-head ${tabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
