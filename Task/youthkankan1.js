

const jobname = '看看赚'
const $ = Env(jobname)


let TokenArr = ['p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3ml5VafuqJxH_ci-IrXXvyKQuhOtJoSbSXl4WZpUyVD-yLtuwUd8mhrDlRckF9xWgfg5NOmvCOrabMEBUl-ufQhmq4lCC2-ZkNOQPmjPn8SyNvugj7Jp4DjKnU06NRpNj54Ot_0Ljvw0H-zJZbtiDqcUwtNzkWY_eqItjdY86KHgPsFJqghiQcj4vTmIH317K3wBHgUSMfdP0QhODDHq0hNWO569VRaoU3jI0sq0rt12wLMrQ-JUFjuwFnE4z1JBQWNS54MrHnfTRr91mguxpw4jxXyXvuvSWo2hw2GMOwf-g8qcYaFXE-3JOGxQSV7h18hFQVl-tHiqLdMLzBTEQ5V7ig_s1eYUS31jH6-x3GfHRamR2jil7yP4eUDPjt9-ysw8NHHP_Q_jVp4J2Z4neLA%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3ml5VafuqJxE9MXKxyhhqN15Yyjpdlcg0hAtx3p44rAQIMWQMnykju86dWSKGqFCl32ktw-21XnlWILR83HwNBYBObFqH1wdC3-1BRnN6lVrv5VdTxltr9DPbvoTXMFNEbW0_KfVnq6WSDBUKG4JRmVwCoofXKVVTRBiAacJyJ3g9zSWl0djImLyQdZ69Md-dbAf7dLCrHxfIdX0_fZfq2pNJcpIG22J07KYXCexZtgEdBFQaYS5jvCTid90PWkLxIxrvqdeqIWJ47t0HQeweuFyVGVpksPpzc3vi8GfLiI_mEs2Jfy0YS5WkKpMhx1hNwsM0uuQD5D8nYy7DmBv6V2Ilp9JrUrDHuFQv8R_iSoQc8BsodrOucuvLREG35iacPwEzvDXAIabXchmA8xSYyw%3D%3D',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3MB98WsbXZbYU5PB4TpYsUrLb_J0c6koZ6603yaHc0lZWRKhOguNBnivtawk8QNhFl5cXtJqKPeguhe9DrbIfp0FoZ_aUTEjU-ntPY2qF0F7jVOd9sPGLAtve7toP2X1ft8GJiwcLlRxEOb4GQTfGgBNlsejeaZomvpSGqN5Z1_GJ8aY5CJFEPX6S45CJLv-8nfwN_PBDVpTn8SWqFkctpuVM8Bf-9MpgfCXtymypeO0CzuVp-Pt3utnC3wlYu2BmHXmMKi3CWAgix2YhMc3BUvyGcxzoTKkHpZHxav4_w0tIujtE_OInRvSQ16-yEfgYODjkUy2pRrH9qdtPe-c7yi9swWX8bNCRSkYpIDqQboIE2FXqAAt3d98YY3wofCADCCh3Sz0tyGCTjaJQCEZOQQ==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3lJ5r7RPkWjFBMEZFhM-_zU0aIirFdJxbQBn53atmtSc52O4EdPPcQWhFASdhoun_iAQQOrEtemipcGaUGsgiw7yhmwsIZN9XWppbIo_5T9YbboZ7GO8y8RhrCOY_3kSefYYX-Fsf54bYf_RLbC5Q61TueXLn0xzTv4U-MS_LBGl0317MWWwkJ9d700QMrbZmOmIPoMZH4OAjkilwLGoTrMKZxMa4qbZOjOmVIP45ly-qhxSLptpLQAZ6j95SmH8dHLsm4WKGorUmNfLYeErhBZZl-YhOKGmgokb8qdvP7Q912jn55u4d71-XVOq6auPWqDf64XZ_G3LCfrAc3OmqljSygLaJtiioUbpbvV-6fV6hoG4JD8zGF0lsclsx5KDNSmVxuXftB-iUzB9AyiTmng==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3MB98WsbXZbZtkSu36vaLjbWQr7Kv0_Vf-T2F9HLSe-hfXdeR8GTglWzuNy5isXqEpplxSD2MNkh09BzSjCSt0Fg7IJ7PgFul2-OpSosm_GvBeep3B4mp7HumYN6a8IQvRlwtbF2fCPYUO8MeAs5H9VNFxZ8-R6LlR0oXGRxphbyfYzxwOHsj-maEcIp0JF2XbfCgJFepMrCYf17Zw-NNRG2pTApRsaNNi5tpRl-DU8JO1M669PEeJdLsOau9-OuvzH-LhNKs30xIhmXUxCf_aSz-zRiNXX7fxZPfNVVELpRaVHYS4loBVhnc8Y7xmtw_04CqzHV7cFYsVuZwCI0IHrpaivNoZEH3q5x7e19LbizvxVVa1zHYhwmzoK-c0qMkjIuSj5OcwajL7t-BtCgk-w==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3MB98WsbXZbYACR5OcjPUzWJnByPaIDtdx3mFWVImb2aRuzVNF7N3JdRWAi95MKux3OsyZ6_i5hTIqDP6BYcMZbaB12020bNTgHiKS2EZ7pW0FOoeigwaEtDd-UaUcAldV-CdkfD7g2uYn_9eqQGS6H_mquYY1ztpAK06cEEEuvMTDq2kmypbcAm6J9ztHz8458JpEN-uj_hwq7kma8yv422QU9IJuQ1ho0YUaj_nekVHs1oQMfZLwdTBZPukm4-0IT5fLjE-hyLY7ElZbkKcjYfYBi8EWIsXBPMogzhIVyjUary115QjN41PbPeICpE2UtAYApo6V_FwLcw3W-a8wod7FN-jaF9fK4n6bWY3wpL-11_MK9SopJEyZmfGxBv06ApRmMGIfclTftttqVyhvw==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3MB98WsbXZbasNALxPDIzXEBT17mUJvg5LSWlEONK-0d8KkU40Px5Fd78aAgIMGafUlFi9qOTzBiX7ZDaRBvtCvkVlIFePmkBqcR6F3ea3JWo6DMqT97S9GYxK6ufZOTEvCKl5W1yO4VdePPGH56IEySudZ-R_W7DjXmq33pdU0JRodZZQyrBXVQUKB7T_2s-aCcS8SOkGXmVzMRcajiXfi9SmoA4tfVq2EjDP7PvTD08yBLdUa8fFQCxRNw9JXKDXBN0WYif3zS5HtCNqOTK6ACOoUwtfHnuB13fPJZwoYjAWUsiMEjmsMo6V6_d-Dqtaa1y4iDVqb_pT2JJM1Otsx04QV4PWGtwuDXocS8NAx0sPIN4L7Ry2XLUFkdrRjwpqoXibeX8JxjKMazs9ZjiyQ==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3MB98WsbXZbarjenlD37dfmwBY9rvgB1KI070WckauSRqbeDRfKNG26OU4CBW95zhVaKXCKpfL0MocpqtiWQh4SsnMNZTKcAus7ApNCgyLTVsP0U9t48gYeoLmR03mHe7jGm7wwMko4G3T6EHbKyKt2z0CMFzWXe20H5l4hsnxtyGg2TSOjJ7_6TLpG_OY6HV2YgGHbQTTkyxa3SAI9av8D1vQIPt4M71QarW_6J-PzxlcI_PMwS9bL_aHrFrcqmytJmsZoPsq6xdRo6UjC7c3_UNsg4x484CjQVfTCvoPpokEqvNcWrFBRsNPF4yqX4WUrlhEtZ36IEFRY8gKKdqc2PBqIh6urkBhZUEEUDXRiC3ItOZ_E7aCkD84AF2UwDPQcJUfG4GbpgrtTxO2lR-tQ==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3MB98WsbXZbZbMHox2F0JdaAX_sZxEcoTJ8N4TgfxZGgWuspbUDCNpUJu24SkVlmSbxzd7zOYmuOwYZEBif5YCm7Is0JjDZ1TrEmpO___mRE0UHW4sNMab7Zz8Y7ZRgOnLnXizOes4zt4GiNUsd5Fv-ecbiJlDlLaANOQ-mPo8DckGawB1mH8o7dY4_O4hZcCxwaeBViTp4LXjoqhzl4ZrBOxTepciKO7qJr2xT5skUeLLPXbuoxjxrdCFjHTrgElW7_ruwiD-ckuyXAbpurhgXFHVaD7rStMYHyVecvu0ygbkoS4beezUUJ4D6h8s_bPPvv9bPelBBj1AYpECJ6OCW908OY-zS-63HurVALXqopIdO8jTOnSU88SBqybAX-VZ2qf0W1M8dmRlQMOSlk8eg==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3MB98WsbXZbZIFQ1m6cUuWuQYfPRFYkQKL9CCXufy0qw8MsJMf6E9L3k14_NDljlzHFeiQCJ7TDnqf8RP9JD95niLEhoD5k8u2YHE9jdGho_gWZUcDr-dMbx0wXff5nCBOwSy93pA9cuy6m8sUq5tbs73j_cIHT5SIu8xieAluhQj-avwRTxCR19tLaFubuhNB3n_Of_sbE6FEJpPvxgJDHUDPN3T4-Qyrk4XW1PDYx6LW1NaHhkTp6AEHIOfmgMdSXHkqrP2T9JpWjDYkbwE5s7EtGtqR0GRMqNlWTtmGVMV-Kg7n6q3CVQ3CbMfMh_JF1eNZnaL2DhdGdoAmhFai0OURf1Qj3UTVKjI2AE6f8M8JwRIZl-2knbzcIFoF-t_v32S5w6oa6dqkAcBBdTBew==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3MB98WsbXZban7Bi8G7UG2Tgz_BkBQQD-PSbDmW7oYCAVvYtQYs-OaG09sD6-9onqN1sXFs2DYklu2BCExBClPsjleoSWv3UzxTJBz0fn6Q95_Ft6CtRZzqiGdbMjwdmIIou2P9wzuRledy4c8PcAFXWK3dW2juwPEyQSMxIDB_SvMUBY9CTzdaWyRf4Icp4NCxuqQlgy270mghoc_UM1wHn7ZvS6ge1r0cBeSdJKkgACezrRbTNHOoK1S-PfSRXuGJAxULLfbuvIC-Q2AJSRMqYtrEMvTD7noGMl_kVHBOTEoZo2muHaj4LciasbZcFgfGXNwc78vccLrncINg_gVBzscu71K1uOM_NoNX43mI4XcSTATXk09ms6ve33yWHTaSkP7ET2GZKNii1I8l2noQ==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3MB98WsbXZbbI5THlF7rebPxCxRtkHiBQiOwKn8HYFydBZwiWtBRrF-TLMc6zNnhjJbUMeiIdfJxF7fKWZkqTqqNArTEEUJrnWP_Z0oPsnOlNkgBff9Xf-xRMMTnVkdn19B4q0uiAFJZv2nBOoZMc_63PcuLrA_BVTfqt2ReCShvUcuph17_6RvkBeCVbwqsUPANtJOCcEr5zJxx0MAnTf9lu0FOrkpSzzoUQNOCDP4hyQ-Hta8Cu1SrjYUJY0Q2qYaSsZGxG-bzwGJcuJ_XsrtTSYwW3o7W-p0aYOQx2jZt95ZRhHOj3bcg9Y1x2SHv9rPqIFWDOzTJSkLnJ0A2EHeQDf5mAvYmXOQHF9Ph6-IGzzM8jQVoiHo6eYnXoqQv8dek4b8lu_GPjYhvBpJRh8Q==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3MB98WsbXZbYv5aeiAyF0ZC6wp_degsA1KehN-cgYIbAgtjxQHtSlcXy5_FKx-nONTTdA6YatcdEhhhh4KhwiKCuL43IfNJiuKOxkBTrkWU9zUnnAS2fhYo7MRONgwP4q85W9Jb4HLx_tcz4thaW9glwOxPgmazIdNmb_PSb_067_5kBzi1nxAVRiH0iYCbHH1IU1AwoCVk9j5YV95vrE1EaqOwHjx4RHORijgmu1nEXK1nb-4CR1PCFdZ-egqNlPGXdhAsZvrsq3k-cnq4GRmyV0ujt_OQaU683G3maqQHu_TxdRFQBfiuR0iVODOAuvF1oB0hq1PGvjcr15OaeGwL5gHRwJgD0rVB7Lrx4yXPiJQ-6UPXb7_lWLJTsDaMpKrQJrcYfnIPK19bIQPQ0-Yg==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3MB98WsbXZbZ3JN9UfUg8vLFzbBOsUZelDtt5AlPCfG_D9edVGqJzixLtJuX0tcu6UIqAOyYy7-QgAlioM0r8mkHlP8WnUk2W7T1_4nJmNkAwkuZiiMYvv4JhXvfwW-UEVVzkstHzZXayargbSkez6z0wUwYC7DfkrKWwHKvzEdWpo8F92Ptn2u8KVbxHhgIwFovvDQ40lYZUzueYXshDxmixm3l0OCljUnMeEVXFdte0v_zXDhNYTcgpH_4tzg2i3-fQymtVV-FYiS78gDYjzxFHnrnwLEec6m9HrdgvFG_srkO9neWx2ywbUz_Ivsrt_y019JHgeZ6Z7rqJzcu3elW0xaIwmru-Xgrofq8o2wSFIiM6EZDqTRrW1Pqu3zjUPqDHjds2Lq8GDlpZi7tgMA==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3MB98WsbXZbafS21mJa97Cg6457EpNDamdIr6nce85C-OyfgLT0D7Rl7DH2alHXEh5AXdQez-MUMgL1QYrvaov9OQj3gHGpfxMh6sODm4VgUi7aZvOrEC0gInyA0Z_dF3Ec9Qv-DnXLfydQHUodusFJaNnI1o0FTbFX-qK_DuwQXhiJkxoqmgzSdpA6x9tORe4N2OJBi6UoSZHo94CCzzU6jGf2Vxwq-9jw0WRo5b9EyIiiUnjhocBGecVSJiKtQIEykwaCrNnpnFTGfs_eilpPWhsvmkFmTFClroMCECW4HPX6nEzh6n_SaqKGfMMGOWkRBE8cyr9qODkn4zh3s5meek_0AFCda4k7cpC1zaj3uiFKcTLFCzeZdve6Gn6BuNvg5IEc1fKBCLCOlYK1bvXA==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3MB98WsbXZbYsvWgOx4T_W6Copms44xic1cBqe5BfKtHgW5COXdsqdt55U3gyu17Ba3Cakc4yYs-pPsL3F78sypYT-brHOLcQzuB_O7lDlclSOKPQnFUOdoSCxdpVflP1C8nDlT7fTHJr7ELBrhgO-pheQEz_6FzSu7BOlNcOTAL9ijXUl-89t2HBbUuYBIIYpjo1Z_m0X-QmO5cF2V3Y1TDQaujHrGF56C92OnqEHboF3bZ2yTtFzu99h11vFaNz_k2RUo04NBSc5pHXcRgX2TO0H4IVhWTPh587Jiqe0bs58nQclZsYU_Ug4vkltdI7Sl9IWyttEi8aq1RLr2lRSqQTyiZn3kTAoU2PGb-m9NMca6SOWPocGxAjasd3WFartppZvxA5mhObi7xlJsoFGA==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3MB98WsbXZbZMhUtP0EWKQ65lzfux5IZpsknSWDZ_38Clf052D-VsbN5zuYURYROjM3EoiQrQpcdNw_ica9zceegLgkSu51vcDrygJdOaQ_CTrCCAX99PtgsN5loGlefS2LomhXDv1pH_RqBddx9PU7YPC9Ex-6w_8rb1TTtoU54bHsWMJrezU3lVx9UgldPnm3diqykWFIyHBzqLXsYc0zQ5nJ1g3wgdXUeaSJ8t2PwBqCSl2q2Tg4OyhLshekRgaw0n7Ns-M7X-TcSjeNpnovP2Q0NjnbD7VzCiXvuEBgdEIfLAu1c0Jg-ZKXHkYzZR7dntiZ9M2d4YyuwmNDWzyJLyrqj-v5ljJfuLmL7ETBHjupP69YL0RxaSv4DypFRG7sykZBboq6YA7SiqYmYh_g==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3MB98WsbXZbYSIrUV-NX9Ep2TdlFkxW94l4MQzeOtsS1Zj7tOUpXHTbwnhftEiUeev8a99EEY0JSGDZJc8u1durrj7HRDtwTn9bBoaua_DK34ekuXewTO8QiqMQ8TB0xXZ04Oy6x_HfG3xT4tkbI90Q19RdVwmtYDob4yIycc4LQ6HJPCQP_LEZh9GsS2cSn7UrAWeGlyw3jgZcDmz6lkyXPcIZ8pSy5nRW7bxwesgEa4z7mF3KO8_e9APuHwPifHp2DLd1MY4dRLavjyUanA6xluTa2jhvDPdIGs-yLPPd8WbqjRIPzSQNw4cDSn8qJxBWbGrjNND1oBsdxitHfCLS_-_uyzC6Kmv1F-CwmYahJNa3ZrD2R2nesBTC72c875mhTmFSVgSS32pradqtP_iA==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3s7GIq7dbsiNkYG4kxl8-QN5c3Ee--PcMZZdq3ZnuvsMUS1EyRWYhGENbJUgSfcK5AHRe8WJmZXKN-JgX5N6hNc7lo5ID_JP7K-s0Tj7iEx7E6TGsi9915R7tzy2DPavWHX0RdsH3E4nvQ65h1OsjQdFuamjGKIVfdKco8LZjoua3ss5RcJx_G7hPTP7RGbiFKXm_dr0uMD8JrjuhzGGeGiZZ88cQqm1ewFVS-NHh_ORw_x-kGb30BScdeS4TpXVLptUdowRkDJt6LlhVYr9xB7W5Gfzh-AHAKfnVNJRJJXYPsDFBbL_CXznUriDeGzGjSSILlkcAYkuebkjynwdCrmlAP0b3GKU28BmmlFqocZsA-HdUeqta92Gjzaehp_VDcVBjCRHuWQwAPVKNdRXZFg==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3s7GIq7dbsiNAQR3H_bOmFGMOGyPYg0Qj8b_WArIzRdwYdcOIT2u1JmQIyu6-6RfrHSgZLVesCp2pkk0yhMFvDmGtgKzEKM3YTrtSxcTn0TJVuclFHbfgxL8JPqSAYdFHnhJJOHAeMu6dNhekQCkrZ1CsGZFxVgrPQw3xWLvWJm4DZTK0fdZXzy3-5b0ZehN00L5zI8s2HMf6gOhn_j9H7bAtw8wFvv3z_ETYY0AkMR5KMWmxgz3Od0HWwJQcWKsUaVv4whII9xgFjKz8x_oxHt1xtKpsC-pvuA0eY4KShG6W1hOv1iMODq45-ot1TTkbFM5ph_dLqmIm4IRDjWmwNgaqCLCtLaC3fKbnICTwNOyzrORN3QLcwI3IdvorkFtuJyuXRlqDSONUsART_gPTUA==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3v4n6B-KO9S9edowtPJ19rdMHo7hgHknX9BRPL0pwxBt9ccQrRtd7IxWokeBFKskw2fcYHKkXhom5KHZVKpe9K9oBNxRfTtG9Qa1r1qUWaCtw3TGfulQvk-2Z40fFWQs6sxWNZuCEpcYW_e_k9uWKg6_BYU6l0fxtAMo8OebNZiRUdRhYXQi2LUHX9I-4BCYjyCacZlXASOrTU20KbJJa5b_gAtCw5wq4SMz5QwWmdhsPbcGUX134YRO6dClxp9ISdUYwdLXxSbPH0_XRx7w50NB5B6u_AB61Fp8A56OEX16pdyrvI-yn7qYtlopPU5FT8ApgIiz45EG9MWTRGMb43zvk-zkzB6l-PaCPZ5F7IPBotvKIUQz2L_OQCAd1sypLPbve2DVakmhWzfbKPJumew==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3v4n6B-KO9S99nl31f6h7XphpgwXt4bj4Qwu7efCtlBjAGr0dE5IZWkgSohJImy9KPxrsT0laDBAe2jaRI_gYvTzkrLixPhMxXNeLNiY0FZNef4Z_xrHS7V0ozIzs1wTBB7k2BL358zPzsk-69zRbigOijVPskfv7Iim-w_vCjoa7pNDXRr_W1jyRUxB5EkbKx80CGADDkiq95UqG12YremLgnxkKqI6hq2Gw4DFaEY83HjEgckGHgnR85TcLgPpxkMRQ_WFD09KrLPrgFTrrehj6qG2WVtQU-Ltluy-eiVywrCwyz4qxqTzCqYlyjksY3BLqhXOyrMeNSXxUNnIWboiTLTrtbJ103k81i7uUvqhCPO1OueFTKCHbmQ__M-DPMNbdeYWnGLZ4Xg-tqfO4vg==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3v4n6B-KO9S-RUakO-PvOiOVa5vzLWh2RpDypjTVxPUf22SSIMJ7Q_cMUW1HQjoRLJiXLmkKR0nopExwmQ6CpvCZdAwsUKcBNL6eOG60whIUOV8hL32nCF_rOgJU0yx8IkaskgSlDhJ99x2kx6AqTSVjHThd9VVADSQPKl8-ghRL8Bgfr9PIWs-bazekEoKb9n89duh--htAwtGChpQlnhiRIr6yimRITVVS9AbwXkhOdpzgQ2Oz-XwLvWFS9kBFqIIE3N7wBkVD-uOANjEhkP53-241iwsgbpZ1BG9Ou9GahwcH_8Y96iQwpyLSJakqy0oNFJtTcbnP_cW9i2k0wnjd6AP6GPSAnsSEfyo2GTCGJA2_NqRaHFl450RiTKfU3i8d8m2Aj9rpIIdT6A83u_g==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3v4n6B-KO9S_KiMEj1Jbj11SsRvEmzt6KmBn-CHLyUh33s6-P0wJunUkACu_fiqWKReuxei6dSFUJhDpfdutpu0kdnwFHDYJhL7levbvmW56Akz3fCo4Z53PzbK5VLDpUGHiCp8MrpnMcEJWqSn7T6oGiSS_eeekRoFWUCDhsdtKCNfYcs1xjp-OLyzYNVwmmMvLP6KvZFRv3qO52ShG_4YHE7NBTHxvtpzzzF9nEIfSRRpWLkCQUsUfAz4-ITzxe-vMEZUkbEP8GSknHFICENqgL7WpRGJPEVNlzIXzVa9IMBy3t7Xkk4p-pnqFX7qCup2MnFqR0zAmK8JqEfLPfxyOXqGL5YAOkk1CrRbpIVVHtFvCqLwqZPbh862MIOr9pt0F_AVEHfu5W7JIuH_nQwg==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3ZGvSZBDQeQLxIsvqrNVzCuBhCPF9vXOLSvDpMnNDvjaFmARHwTts8eZZJCxQW8YiApXu7fiWdcBlxYkoNP2znehrV2pfY-0ytxKt3VlhJ_pvy1xUP6k71ym52mzxWLBDmClYS6eJcou7YsSC8454J5DN1A_WKpP_ZM8d-HTBlEKI72VoIRwrI_KEZgaLW-DM5_Mr3_KIfb_bcyJQCE3K1NO78unGIK9hz2mU3Z22ZFjL4w1fnGusSMIS38GFI-h7dpTgoAVaw-p9aZEhG8MlqUsYHiwt7wXJ4zlitbLR_5BZqN_m-lS-xZYM5Hg7l4_Z7JVhaM4jtC5atjkNhCyMrehV_rZOGYTJYUsVqXnPPST958UfxEyp99ynvw_w9yDJhd-MuhOsyMUTDppIugEErQ==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3ZGvSZBDQeQKwcuy_O6yH7on3HyIKqUAcuFYjd4hyJXZRWmC3p0FDfTDnlu0c2LgQv1CbrVRpnWGLxKMfylYy53Yg9un0gVaYcASumgXhDzoMZ58fCQ2_NAT8ry2XuK2KYEuKLRSJPDfSOssbFuKGpZs77jaUYF3cjbgeJff15SNnL8ZpMpVKUIeTlEHPy6swtVUzitiDm-NroULj77ujmGrAXatdbSCdGoDJw3I6JCIY6nY_wtPgbCRE_9n8RhU9XRI2qE8vkK0tDWUehD81fQdBL6Yjil3FF9vCICphUYtP48s8filPye62DMQa79M8nnM3dakmWrnv5wmH79CGckA-uesJh-Vs6Rc8iTwSCwI3ap9g4bfrzY5G-y5euYSqPpZSugI2L6EP58XOcz9vwQ==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3ZGvSZBDQeQKG8A40IIVL0J0Nyj4iMqyk79-evXoVLdCIbQSCA9NX8_98x7JRnZEnqNq5IW_tpx8ceeBVanrhgfBdmt89Cn5vJmpl4v048WxpRs8baew2P2Yq-2NlNYfcBv2_hem1PLM8UKgK4KzFCcO5tBnGtH7Qq7LoZYRshc4ncMnK2io6DWrXI938lvP8XzBx0ELYi8DsfJyah-Xbh4vCbJqgwA0LSBtVm-JrdGr1YaDH0UIlE9n6H0DMMJ5J6uxS63TkLRdWIEBC6fhA5oR3LSqXXTU0IQgnUVs1vPQ58c-n5-lofysLKdAjTlwX7tLsZ9h1kbtTmqHV4c9Zr0PCYenXaiXVcsSim6dmWXk0ITwO--jGzxdPYO4xeDjEYPy6Og6AWoQp3Djges-fMw==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3ZGvSZBDQeQKc15zeQEbKC7VyMXeLsQVKUnQglnwvjjfxUnLmloRkwTNW1m0j877jtnDv-6vxPM4c9fUF0i0ymr_QcS3S2nBOCEz0UXvNdmlZorrsOK-m40vTqOwOt0RuMaJmj5Y7KRqBtDAITw-DwbiXkHSNtCT-ggyltoTokrAwBakrI4P-flAZ3--ylMpRAtGSz_gNB9KLUyP0TyYKcoAjM_bAR3mzHVSyJYdYWaRQ7NgQHW-A8VfRX38_VtA-j_7rBiJHKMCyoj_PcPt2ihYjf6WzkZ5EnP0Hn_xbvrNtahupmrvAo3zT7YOq2kueplTN0z0CWvwpvPmOUfxPCJKZEH_PdVID2PSYlKIpXjZEAJrF6ECFrJ2UyAJrLkuAHf242orP6ULpOvCW9FtoJw==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3ZGvSZBDQeQIaOhzVcbqgvh-GfZSaF546kDYYdrxnVfi0Ny9fbe2k98O97GQxifBssIZevTbWMTqRv1UeJa2WclrMKPhZZZRs7fSdI8RlLRyndlzhUrJ6zxu4M2vvkoHbEaJjTowOG175ybhGhg5HpTd_jNr75wC9O387JmeDgEuiOAOdKWRf0w-OGnHNuBNZ7vBcKEDMYRsIUZNviwPsxQ_4hFOq-XDKedWhLLRrtI1Tgs06YcvTflaK_N8fod4w5hG0fkT3pjTMLY9u2gcb6I6v3byjiS75eU2or2-uvwfJ662IoWezpqT756tUIHXZNniTWW9N54rGqNuWonMv49dRrNJ0s0q1Ugq0FGY3V9RX1YFlhHRYFSGjL4q3hL3aOH6yT8X7BXfCvgURy_GPlg==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3UMY2rHDhHu4xqCj1GXK2MmHTKuX4ol5kSIDZaSy47L9IbNST0Ec8AVv65IgC15orKIx0_2TJ_VgppYA4fQsc-zpZpG35vfE4SqHza4sG8_cBRXPDXFCrzbWiOtobwz7PuQQjC2FkDiGT6nwmD9Hh5En3lJMlSUETU-klONfilvbhAFE8y6g1rnZKmGV4IBNLe679njcVvN-x1uGjA1U2ttMIry8ZjupDVnq4tDxY1F5G622nfXbsgR-D5oD_6L2boU-B-NEjnLYSsVS4a6v45RllbcUnFs59xHVV7cMY1FK9-LsP-apVaCDxNbUWfoZt1-C_E5PSMXzz_mm47fmLSYfsX-jEfYblwbyi3hMRXjhPB7l0WIafitXj8UFkb0xpb0VTgbTARPgwWqbNhoNH4Q==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3UMY2rHDhHu4VJDTQyM3XyCpPsOzBTljq8A1DAy4f0Iz7TVYkSLLjWZ77KDsqPQ1rVmtHlTVDCITMrxsIaQX2cyvskyc5PglibVgfaPEq3fUQuLovXx9pfG47MYeKADeTc6Sgetw7WjHwFq1iqOCEMhOhxPQ6APc45JiMtLk8Bgxb5Nowdejy8_gLkYBGu2yur36Ve9G7MGaUn0iNm1M-pjTPZuLDZGxePfsl-tUGU3jyg_lPlMz_hYDw2YDPbamagNiJdGjYBCl2n9bdlkENqQzsBEMQElAjSNgcEKBrGWDoB-pbMYFI1OANbocmvja1_WYCjnlKDkcwBdtM5go2IDYXjPEhM1QXzUyy3FYG6SFLG2zTOkkiF1K-czjvtgmoM4sNctzqMdZdyLwBfmHvgQ==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3UMY2rHDhHu6uZpmsiRwg7W2E0lY6aRkrUMY44B31uTY5BtVeMg_m1hutDraYySZojVZH808frwAo_Rpy3vKl6FTWoL3Y7o_N93hsoqcKGLxVc-qffWZiC1ZwaY2tt1SgBSc2ShKwlNEIpkxn2SmF4kb0IkGDHppooGaI9nApMP94_qdRcl-EjbBU9KM1Jsjuax7xTB_3Zoqg5EeX2Il14D5lPlkeEr-5DetOz_OmGnZ9rByD93uSISXjLZKJrMAV9-u51aQpWZHyJBW8Wv2YXhtgurvcgswR-irm8ralcAPH4JpCPSNg8mhX4BR4-aQDVSQEllIwTvS6acnv3Uy6S0z1uNo3i9wA4svQ-4u0CX4xEi88M5n9-umbQn5ybzAMEANrs9WjLBMzcqImXa-t8Q==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3SZZDRV4W9YtYrQCzpwi6b-AORD3uFBbaUzlEXsxl9o2CnqsZ_2zxhcc8p5nrCKOn3DzAPSDeYwwXH0UhMklN_bQKPSyRl_r5_ojJLl5ASpGp0Kg68RC3JVbHpB2HXVdHp9i6n1MmcZ7IHgyaQ4g8wc0Xbb7pgFbjFTyc3AP-g0oCTzlxpfuqAruH5IRsMkViOvIvzo1MOiBBbHdoT5pk_6Yw3hTCJd_iv87yjlzm8LzXJO7MJTr16tLGkv3q1NQLSqSUHcSj3fctSEmvUYLE7aNdq5opbGLBLdHzH786_LfU2Kd2AXQLI2GWhwrLtvFYwm6A_YGhljlUl9WGtiX1md4oIFCFAU3ITTC-cQAcZzAyoD9ZgijAjESGMPY1xPx0xVdGUkqFQePXj2LlsV7Njg==',
    'p=9NwGV8Ov71o=C5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0ZKZrNG5Jfn32MM85zwLbuwWRHCVzOIc3SZZDRV4W9Yu2UxzZX0fpUCTeT1VArnH_6I14751ssnMg3SXauds54mIu1fAnYEeyX06Ybc3_zkg4Ee1OSmv29ZAGk9Oln1lgtGdh1L-BTsjNaoG6iFO-QM1iehFc0qKidrStIMgy53XgvcuFlQPLLKPrpFREf6PdxqKXP8sjFFsr52ZE37tQRthC6GzGzzvVbRAje0zVkJpflHXjGRyER_Gjo-c3t5Zr6KhERJsW-_IHNVaOc5rrB12APBMjQbiZfbMQdn8cQ0iRvETnQ7MsUG5oS-kQ74gFOvUpKcFdbWWk0PrzxIQC9Ul-1MXRuxc3SjlbmGoNO6zyabWjL847QukG1jWEkvskVVqc17aP4Ft51VvLecKtAmv7o7gCyKfhpwOZ8CEg9nTAef9O5eMDfw=='

];
!(async () => {
    await all();
})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })

async function all() {
    //nodejs运行
    for (let i = 0; i < TokenArr.length; i++) {
        $.log(`\n准备第${i + 1}次任务`);
        Token = TokenArr[i];
        await adlickstart();
        await $.wait(randomNum(0, 2000));
        for (let i = 0; i < 6; i++) {
            await bannerstatus(i);
            await $.wait(randomNum(0, 2000));
        }
        await adlickend();

    }
}

function adlickstart() {
    return new Promise((resolve, reject) => {
        const url = "https://ios.baertt.com/v5/Nameless/adlickstart.json";
        const headers = {};
        const body = Token;
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                //$.log(data);
                const result = JSON.parse(data)
                $.log(`开始任务:${result.message}`);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function adlickend() {
    return new Promise((resolve, reject) => {
        const url = "https://ios.baertt.com/v5/Nameless/adlickend.json";
        const headers = {};
        const body = Token;
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                //$.log(data);
                const result = JSON.parse(data)
                $.log(`结束阅读:${result.message}`);
                if (typeof result.items!='undefined'&&typeof result.items.task_score!='undefined')
                    $.log(`本次任务获得青豆${result.items.task_score}`);
                if (typeof result.items!='undefined'&&typeof result.items.score!='undefined')
                    $.log(`本次任务获得青豆${result.items.score}`);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function bannerstatus(i) {
    return new Promise((resolve, reject) => {
        const url = "https://ios.baertt.com/v5/Nameless/bannerstatus.json";
        const headers = {};
        const body = Token;
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                //$.log(data);
                const result = JSON.parse(data);
                $.log(`完成第${i+1}次阅读:${result.message}`);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}









function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}

function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
                : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
                new Promise((e, i) => {
                    s.call(this, t, (t, s, r) => {
                        t ? i(t) : e(s)
                    })
                })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
                this.http = new s(this),
                this.data = null,
                this.dataFile = "box.dat",
                this.logs = [],
                this.isMute = !1,
                this.isNeedRewrite = !1,
                this.logSeparator = "\n",
                this.startTime = (new Date).getTime(),
                Object.assign(this, e),
                this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch { }
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                    r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"),
                    a = {
                        url: `http://${h}/v1/scripting/evaluate`,
                        body: {
                            script_text: t,
                            mock_type: "cron",
                            timeout: r
                        },
                        headers: {
                            "X-Key": o,
                            Accept: "*/*"
                        }
                    };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                    r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                    o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                        s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                        s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
                this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
                this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
                t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => { })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
                this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                                e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => { })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                        : this.isSurge() ? {
                            url: t
                        }
                            : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
                s && h.push(s),
                i && h.push(i),
                console.log(h.join("\n")),
                this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
                console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
                this.log(),
                (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
        (t, e)
}
