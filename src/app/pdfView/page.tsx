'use client'

import styles from './page.module.css'

export default function PdfView() {

  return (
    <div className={styles['pdfView']}>
        <iframe 
            src='https://doc-0k-bg-prod-00-apps-viewer.googleusercontent.com/viewer2/prod-00/pdf/shhjsq0kddbsm6mu36ge33je7bnq24rj/oouflj5mepa715rnsdod0et9c1donog5/1715929725000/3/108387825251283899902/APznzabDqdFUrwdjCLs-R2lyppua-7kRM5sHalwQ_IJ6BKn2gIN_jZdklA5eCql4-2DVuMnT1CD_b61gI36MeLPXcYRCaSS8uGcaSelFAVIiK6yaFkGXuGI04SMcV7WwEl4i0E_Ypafxlb4R-iDWm3EZb7D9INgK_AX6RGplZ39H7ExW8tDH7qWM7ZhFG2JwlfinPRTaqm-X5Ye4em9Bp_wvZyxTL43BvrXGiMNGdZ58LTIOpMf7HXHWRP5qfCoEAouRGp9ax9sv5O9XLWTTa7G2XWb_NzcsKAH_ArLjmmz1eWf4U6vwHA2u1yYClWKGJyo3ixi3DPf0JqRmICBZ4uPXHUoUzRAyC7GA2XQvHWOPp-mwPATcb4wfU-dtBQ8RUORyL-wzxe6JRKQX3RMKarORGDbZXynUXi7bAnkr0lEi5UZRr3QM8Is=?authuser=0&nonce=81a8e5ho5nq9c&user=108387825251283899902&hash=2em5h79hu64dpolp0n172ucmeni347cb' 
            width='100%' height='100%'
        />
    </div>
  )
}