import { styles } from 'config/globalStyles'

function HomeIcon(props) {
  return (
    <svg width={27} height={29} fill='none' {...props}>
      <path
        d='M11.2.721a2.8 2.8 0 013.743 0L25.212 9.95a2.8 2.8 0 01.928 2.081v13.173a2.8 2.8 0 01-2.8 2.8H18.67a2.8 2.8 0 01-2.8-2.8v-6.535a.933.933 0 00-.934-.933h-3.734a.933.933 0 00-.934.933v6.535a2.8 2.8 0 01-2.8 2.8H2.8A2.8 2.8 0 010 25.204V12.03c0-.793.336-1.55.93-2.081L11.2.72zm2.494 1.39a.934.934 0 00-1.248 0L2.177 11.337a.933.933 0 00-.31.692v13.173a.934.934 0 00.934.934h4.668a.933.933 0 00.933-.934v-6.535a2.8 2.8 0 012.8-2.8h3.735a2.8 2.8 0 012.8 2.8v6.535a.933.933 0 00.934.934h4.668a.934.934 0 00.934-.934V12.03a.934.934 0 00-.31-.692L13.693 2.11z'
        fill={styles.whiteAccent}
      />
    </svg>
  )
}

export default HomeIcon
