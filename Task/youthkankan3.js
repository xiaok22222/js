

const jobname = '看看赚'
const $ = Env(jobname)


let TokenArr = [
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73a6v2XN27iPCOZ_bAy-Lvd2r7EFLHHxid-TD74ZCA6obEvkaKtvKwTAmtowbZ3H_wRhf3PGqYZZUa8qFFRp0IFRWq5kHlQl2RGGw60hwI8NE24YxdljdDNR-83YQ_nK4YPT87WAKwQh1RRn-1DVGCm6ywPCp1FUNrp__gTnytQlRNrK9nD89_tvj74JY2znSUJo9YLli0dC-L00waF6IvZHhUyU2daLCu5NKOf7gvo46yklBmNooHci0S_R14A0KruG7TTOj1JcdKT490JaZJ4PAhvSE8KNzdejjqTplSQPqK9ztis5z_OaaxKEqFg68VWaLIXObx5Yf0MrY_Z2nePeE9WgjbBRzWym4k3cd0WNQRM5aT_CvDaXxj_q5E4Un43p4UmhfltOSrxwC-hUqeaMQ%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73a6v2XN27iPCOJLga415-OVo7g7he2NixdCi8oexNu-_1hGtfPoU58bZ3k5wua4gvSGh0B9GWfVgMX6eLlF1vaTvOOdKZg6hbZ-Ykkz32T-Rz5-9v07kYcGo1weUhsJgRFatctWVAyJSghJs7-SefO1kOHOFElt5USn8SUX2F5dB_-LDzhNNBUAB2uqk8yT_VALTW6WuWlhL1k9ybMm81gmSxPvhFipSJUUVzV3pP0ycrTKq1nl3yVZVESuoU_F2_QFs4Wmo6ZixKs5OK5WJYhY10WIyBBWnHu6aS2UaLX13tFOxFU9XVyY-TEK2PBzoiovdnd8VFwND12VyKpkQgKu85IICMv0mU44nf1eHzP53gLxX3XYdXXyFtg7dCFuHj-XwPd99OnUOmcVr1nSfujtQ%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73a6v2XN27iPCMw11WewwwwOciRxrn1iDQevLd5ogaq7XjPQFyrlcNC2zOIi6i-wNMz02OuPQQtWZgS6qrTbiyTxbmdkY2fWi6RQg8MQzsDw1oxf-a3MRFwAAf_i1CKNwC0TV2Q69BjH3mqJ8tUzw3O7Eec1GisZfdw0OdiRQVS3Hv-mOhlwmun9A4nSJ_mW3hwCGoFd8GRdjmr4p5VLpel_GKevTICYm-jhF33o5oHbRunTFU0ql_BVNRbYcguhsRTk8WabMJb8A14JgbP0irGOuu8lmK25g2NjsCB0iDd_Cbxor_NrSrdKpvf6NjNk2QI2kOZ1uqAeRfQKXp5MRAAqbINJJwSKnAumd_SFyleh77_xVr1By-PtuuPwdzYtghdVWlB4jV6fXcQSoaqaJLVrg%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73a6v2XN27iPCN_6BOsdu7-0NivqqJE6ZgDJF6-ApSOInhNtd9FP4InyMH3BhACqBiS9zH3yDDhr8E2nnn4fYQSaCtl3y2UD2O-eEE0a_zv2-asOJV7i-0F3hWzy8ZfgKBAZcfmleHbcyGFiSwPknoajgzpoTwNV2jkM6s9PMOBMs9X-iokFiL1NuRORE0RmMzTeYGPicMuCyotS6gvPPJK42ywF7TDiPeSgQOyLDKhBNj_vsyBLtAA1Z6TMzjmmqsalu9U4hNSUMATF_ON404LHNC6aRelfRqPZ_DqY6GDFf5fmBacEwPCsnY3ZVAoQ5b8Q4ZIVUR-ZgewN5I2vO78T2zTCXn8BBdScaTh4kvg8N1qY8uSZocdR198Wx-HMF_jaEuvbtuX4xndL9uFl3_X9w%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73a6v2XN27iPCOCRGP-KyW2pBmX0_-qVFMUjX4dppYExYZI296mJ6DvPHAR-a_oSNc997XjqrzQbkHMdXxLv8m3FvKKSICLiM61cM45H0wcxsR11bJErkcPFE-xcXup7yuPubpznj39lBTK-OSAQA45X8vw9gBHKzN1PZ8ceHL6LRG9HWQkgThM1CYYGh5oRUUoXvQGL-ljyalG-VaSuDhrilV6l0gUfiuJEifz3VCizryZ7ZN3VIspP_DliREsqnBCFgvONvd1hnfuNwTpaURz78XR52kPYYwza3eu_LKzPgfAddZDsjGdWQ0PoiA7J7YLZ00RGWMtfKxmxfcghVOwUDSktr_4ns8d1EYwgYFZbVnSOCK6SSwU-kynedYQq-XmdvSIU0UHkWDx5uu_GwlL-A%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73aOn--twzVWM4vPrtTjgbFEnrMvwfNWsZF9Sk7m9yDMYBH5aUhPYjHgermRVbD4503i5MVr3Ia4ZMUEbojKYjFY87LrXU3qRV44YIMFtwrcnmb5OuFJx1ExyAZAxCvg3wA8yGfeodmiIz1P-dO1U_zm_Y3B1Gt9tByoc4yWQpoBSMpNTzt9cWQf1GMgDwBxhseJ5QJGHKMpFuj0tG2KtCbQfWAiqcwZfXfXTUwy9gvj-k0cLKOBjhasyQMt9koCugoo0Q7txnPYGjNr8Fg_Wwe5dygA9T3iwtodt2bORzrpxpdpDCTE_rpedDOdrQGRx5vVsxjpxQGQMSwLNE6N2tZuz6SpXe7uJHjakoYvLNqJiNIaTs5gf5_yPBiM9e08GrDhJD_PV0Cud3WOL8CjaoxSA%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73aOn--twzVWM7wc-mNw0CgvgCJ_J6XHOwRb9Ghmxa3Kntwkkv7uYk_BNwHLlFAbxWil6aDvXcCVeYOxn_Uj71uiuALcRd9wmg5IYpeoEB1JKrkPhHNHIlcdzOWopEzVgozW5jPUlUcdrtf81t9MccaVt7DyWP07HVQiYfdKEJrOnnGyRg2rG9ubGKVO77szpnxubIeuRRfoKj1cC8TXmVCQbenu_GjcIsMKooxl11DN6NBvUgyITKjIXGsHrYlsYQMj5jXNezJZFt5eUzi3t7RYzLOipM4_aG0pSpopO6JNV0vB2zP5SZHZgZiVBrzzAxAvgBzFDvcny6nBlKPeBFpL7hI6JIC5DgrCRq2bAV09ejr2LopPDqlsDBR_62OAqlvU4E39hfG-YBDIfMUHPpEuQ%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73aHJ6-qpApZJnX7ZCXQP2XFinnrAtYUTOr5PWxGt46fOxLuqgeAemwTLxckO0CIy2WABW_8qr9eohxQe2qys7TiiLPdIiBouqnGVFnYGIglxH_6JLDc06MtKADClxhgFtCeeS1Ce4hnHc2TrK5XRU7UGtEk24m7sj5Uv44aEFQiidHwBp7rTQvyC37Fd42SLtKo1f_KFf8MvJIta7UGvH8qWX1yE2Mo1tB4JPqvtz0ZiOEKrFEwC0Oj9963HEOk0cZDijP6V-lDZRTfsifW2EtPccOzZp-COphYMU74mC7exLvavnd-2vJIUZ9XI3XX4_26h9eRwcCbZBKarOBLnaTqQpT5dSJK2lpTx2syuS9YwkCmJqEooIGS30evGhnlbd5VM88_EgOFt_ts6_75MiygQ%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73aHJ6-qpApZJmp_eGCI-lKjpQnJThzoxTndnpWiQvI5yZrzoSk5nFFJWP33X7UJOKfjIPtUbdQRiijbhwMFcMIWnM7oEkm2YuENdwflot3LLEy67rjfRf8jEHrI0SBCpuYrJHZyJ6pTybZveI5pzpLATUWx7xXAkzR2K1H2O0StM-0e06MXYFlWbudVsHRrTKte_62K5nmiwqmpbTRYYsh9etG3H78pX4b7zPvkVsWT0quaxa_0nZNgFrqy-oGt7Q0O14eeuNTObKsfpA98UtGmUsv1rerUEw-rOhQanypfQjSOOw0SFWCMCf50FQyO9kx2c3CAqdfmV8XZeASUARMH85GWp7Ak2-0aYfHaNwGmxcuNqNY-Tnul86LU7qFI0q46RLILPdra0xD-i2x15semQ%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73aHJ6-qpApZJn6fvLVW-p7c0SOkMI47aGvwDIlFNfLwDeQlxcN3RlfzdtbH0UKWjh8M17IZUswsp-C2-luFS87a4vh-FGrGb_0-xmeYz4iUQ8LzSeqTb-dElQ8iiqoX5u9MDS6xOA_nU5qK9M2dEQaP8vfdHDCV-smGdIGZ3QZGCgO8PlUHgSm8Q0_FgOygEgis5rmFgOjsJIEgnZJD1DOiRHnVDZXtBFQIu_glXYqPq-XeSrDNDFKYL8kCRdfoyKzOm1zx8yeqSWHtG7JXUFKNXiqVkvehxWVvkiGl4jyOL1ejeIhMBtBRJg9gS3Mne-JbszyUDIaxonA62PQ2ugXcVWbUzuFO8thpUgdsA4EyI7vb-IVEgIoaXvDasE41rdTd5nNhmz41uS_OjbFCC5nmQ%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73aHJ6-qpApZJm4BB0Lt8tXHlT4twHg3UcMWv1rcgIEN09abhF2MyuMItRa_uj810exmF8_10hE540Mukla-LbjJ1MeldXohoqvf4m940mnT-PDTtt5lrZWQCx1cuYGfV12mMbdAtLoxvEQHpyuLFjj3VuQA4vfPRWxmBLol7P6bEjaJmBy84plFtVzZLU1Zu4js-BpY_5DhNgXYFYJ0jvDZ-hCduwsvp5-kkUtpb5ORPz3qADfHbaEJxTvd7eyOYG1TFlxDc2Y42-yWmK_mov7vy4QdBErtJ9ZPhY_CmUTLbZcyNN4e3APumGH44h1QYkXTshhg_-uksTDpvgvZhW7P8O12t9ys1kfc32pqGWbfjxHy3Pz4UZl_skKnKR62W3l6EyP7NgSJLzeZ877bbjIIQ%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73aHJ6-qpApZJl-YqYh_rZJreTFkRVaH41Qk6tVKLqFjquhp81FcoRCfTE9U1qXkHFhcsEzmymJBXkC-mB3ib2uVD-C0BO9rEdGgB9Te7AuVOucIslK_W6EO4phiEd8n75XdMwegZfIgREOFCxIWLEeP-i8uR0MO4X5WoArdD9xr-fr1RvjIq6OZX-EJtb-OXAN7rSAvJqRnczC9SegJEjdMDuro74ISPCBIUm_p878HqAItcgKp6gc-3Z4vcpKamxhLJ_HEP_qCfAd49f9__SVRN2z_-qpwQjbmNCa0l1kMeJ5labzdu__rSSYZ-FR66ec8aQrdnqAy4R_KaUusuAZesdk9uWQ23mIgwWwhjGei9N9YjE5rsgqQgNnvJ8M3V6E_AyB08Lwai39YwAufxOcrQ%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73avK-OC7FjANwh7Dv7wJx-qUITo2tY4kjJnNmTOjPKYKwDfyPaDUi890dcBS8ZXLTD9M5f64klnAfTW2DeZmXH34LVZrHILKrogMd66-Qif8GQzUnXCpzS1EDTivuBLC1bEu8mvowx2Q6qRHpVQeBTmnpMk6fBpbGH6bik6O7k911DGQjHgJqYprrbAjeMDygG8j1kZOngZy9eXYQm3CB5OSV6qWxoiuiyah-Lg0KpLy9rpRvt-Bdabl-khepi3NK55WV94D63ATMRjPk_325jPAa0X4TsLNS2Tgcc92VUp6sazM7pjE-ZQDFjrG6EIx3kBFtXH_ti3zy5nzfrr9MFtzkXn52DTLOji1ZKq3sh_95fnTveGgyfQtLvz_T2dBvB1PyGthbtqEypn881pHx3lw%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73avK-OC7FjANxySi0XaTsEm1Ziadq2VKeT8z6qfgyzjDFaH2w5S1aag3AQQX9Ua0z2ZyAxUqNHFyHg1wVKo7eV7QhsSf3qnUdZHqLlUSoHIdCrD4H7m-w6Nte7DUgLBHO52UtpMU4r9pzQLVcwut3CGSs2rclKhH52iLk0eyiDqT5qZTuu_-5YJSyEa2YnMtg7DticWNK1_RpxwXs5MzlYLh3hoDV4MzxWRaPGu1Ujg_9Cd58dH197VJ9CnlYvg7Yf4IgQuEjAuhukO5L8DVREkOs95AVhKZ_Dk0u3xHtguxCS33IyiAuWftJ0W4yFwiUhjcEsmOidyYKVXIYuccP0xPPAvrtOd1vsKhpn2HMr9RWOpJaWQBBL8Xpf-f5c0o938o7Tb8ogzUOJiYK_Ry0img%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73avK-OC7FjANyeCkbLTW5--0AZVJBTQ8F0UOUZ9nfF6MP1KnUZkoXtxi4Emk_uWh1dKhTxyJkMcrxJE0yops8p1PEqLIIHyp43nWlsJ67uFQA3IOFZ5PIZeXjVZelm-Uuup_t1euo1kMivhXt3MLQsLNDitQ-GkWYxEQUYUloRIS9fFz-TY2YWnkYGU6DplDV-kXhax5yk2bMfL27N3sc9EgQmEYh5Sbzc8pj5Td7hKk09U_P1SLEESl2_OKhuqYcaYLmJA083Qs1tRsI0NyIMw2kBpjKqg868-UZjYvGq10ZAL_6Iun3UZIyOeIuVFeY241q9pibeDWIEHPKDjMr6-jSE308pLm8Ca9Vo-GyhkZGNNocJCPrBzjMh9Jwozz_xV6y6nL_B_grwzSZbqGxQzQ%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73aDPtvGwUf2Wwj_hymu31Mnz3ELt41opjheisl1tZDfapm1qxc5Qj77QkXR9UrrihlB2N74_N1oeR087ABZtYUrmGK_AMCUk8zWYhNrkSxhNXJePD7hjOaid4HlmfdB5Hrk4ddKv5jtSnkevowFucbaSTYYJ0IB3KXXC01Jplqn14zVFNy-IDOKhbA0dsuPJTmo70NLB8TTH4FnxfZrlGGzP5bk6FBV5USxwt6EcUl7DSv1NCoY5T2hs4XFR9mTIpF0oLbrSJVbpx_n0o_XcCB7W9qrPoj_wsE0blGJVZYqp5tHq0I9YLqkdJEm1F92beQFrOBBZDT48dwsWGCoMR90tER-qn34q6UYQ1eez_GFy2-BCfBMZoxDq7lsBYkGdkCQgxOF1-4y558zT16htwwNQ%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73aDPtvGwUf2WzMf_MlbrJqu3Bf5xMZn0MtZIGW3eBME6dvROm9UsmIiFqyHccq07zJubjyliMp9Cs7GnqhXl9NdjEOquA-wq7i0E43irFZXJ8XhTKwHRlEqCUTbTf4Q6lxn4IWv_W3qFl7Lc3RkqgiPzXhmrTZfEjinJdB2ZXvLef_qLkF_AJjqNk8GjzVjdDVWfP0MB4aYNUWiFawJLgCQFcH42GGfohea1DrOizHVZUHzSPfG1uoxvGKg23FCn93TtCbeDM7J-tNmU1jgPDwmZi2sVHfvCG_YW7jXdXgd-3zyMb5eg4B-KclUZHF9Vgzg3Si7Uq1dEi3q3Q9GzQfpOOfRUvWCDq62Gg84JWj6ri3qhJCYXsloevRZ4zXxudhsWYHgYKNfnUzxXzbcQaskQ%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73aDPtvGwUf2WzOIb1d9361S1L3vwA_aMRsf8GBCNs4YCCW5esXaQn5kOwLvefY42d4Br4f5rDtCOUZjMKs-TgspsaH-G6dnq4YMrs2SfT4VCDhiEJHEBAxCS3wXsD1lnw_jAq3OnP4m1aCg0EtkOwWYCM65F3_30rKuRBwDkycNzcmVGXuERD-R38FEtAF0WOdr5Y8VycugB0iowM9hqkyNRctYlYJiJLA9yXvz2KA0o8MyHTyg-a6Wu4wJuLa17eTwWOl-CP3KRREBs9yjLQ5nYPkP5W2BWD5EBaZ_jytUHwXH1OGz4yhUERVuaxsEsfcROMYIHlg5VVOsW6EbP-bfA0NR306N4-OwOfbqFXezeFohL55_dmSwOjRGbUPcM24Psk2nINinDfOqw3JEaGtnQ%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73aDPtvGwUf2WzpqiCOkdIo2MtLIwIM_yx9Yio1H5n9cuN_KTQLEXvD3rmB-OoD_uzs_cslFy5uvA7zsKXY0w3vvSV5dinJCLUleWXenoAQ6aW_xjDHDRr6UqqCEAcXn-lvdwmO8lP8iuLgDaehGo1DpGPSgRIXmMNLhJtu4Az9J_LgDpl_u0TOgL0QwtED-cKcnWpG-f5DOKceNF1pL4rNE514i3fVtkKaYAszk4GRp2cEuLGDHHfIg7NnNjrOnG-jEaVkCasFZDSU7bXXEMi6brlNBepWnsK2R4ec8JiKR09982Mw2YIFdtzAkvHYnajx0XRmXWjR-cSr2B2kfyHK1q7REWyw_39Ylaj04y_YC3y3AAWSvYUXOq_yNo7JVnF2w-vfwx76IkoIVVwH3Z7Crg%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh5LBn79oLxiwE-3LD371adhUF4pU9jzMYQjU9KwQC2IZi28uqUHKrR8OUdw9Bo1dbLC3h_GaITd1it6DLyeORAuc19wqNcwYk8WZo84qcrKbX7GZORQUqkOsgZ5-H9jPspRFblXfEYty-yK1dU3bY5BDp4bIU-E-vfI67VdNizxRdvqAdy2YcenESY-1kKwXvUjlCB0G51zL2IHcdz_vFw4svDhkcaJLJ-16vqS73TmFT8B6p5UuAkzp5uAMhH6hEN9QAW3Gfh2LUs0S_E4-9Nkco1ARQcIuYJWk6thuRW9NbSc3Ze3AyYKqOiFV-68u2zCORBn0EwWq0k7bRR7XQQQvbEkby4zFtiU6DH_Sed3TQhlF0ZdTry73l3NzudP578dnjMVNEvafw%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh5EbfTOd8SwzpoxeOCUMMWGWqqEBiLr3iLsFSWIXs6-ySiEN986ZtrJuxZsZ7rw8x8Z1oZPhkSHdd4GiNQZbvXNLYoVUNMvCW9f1tdtVNqfzPxiE8obQw-mFJph9K49OgxZPnnSDm3MhTIW49bZhuLcRymbuFxLFxrg7FPKCRFVp_dmf3soVxuIbbenrQz1JrjzOWoNCVSC6rUv6FCISABtlQtJHQnyDmvTOArncIux9-iHcpUOeSprCoZC9vv4aM5XNKWA_r-oiHow-K-Jr1cxRI-A1m2EOU3KtpzAvVG0trFSHHkzifzD2WS7mxEsK90SvX9BiHqbZHmWEiUrgWft8wgjK98ae67l9Ou-aYsuK1F1EoE8fIW4Xb-LFx0nEp5_S6yAjV3GlA%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh4uYGPRpOuytSvVDAC4PnUnvSx_4Nw1NgaCML7TWh8sSKv-NzUtzWUGCqcwX_qHoMgNVHjidPOXN3Gn84FnwFJt657HhxokFbyRMfpGPrHEZNw76rUq8sLN-CzX_rCQxxb6YlytUxppmRnLowtuf4k7GTO_mwEX-ID8jBV7XH7Dv9I9UZmyfxRY79-3qx6iG9uj4R17N7e2xJJsbztbVcZC1iRAcXGvIL8baBCd5wmTld-t-vJIeZgqg1nJA2-jdZVDto2E7v5VSuOJxMS_JlWDwsswGEESTIo8bl_TnjTA3d9HsruTvJZBz4S5VGGA3XXbpWVrGpHIvZLN80uCTKz44w3mA8e7SD3HAhXB2ez4TPyPctW99RIjIGRahQPqlArj4_me_pwDlA%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh4HtqLop4LfK0PD-l_IUk8BK6qM1BpA30hYjESGEpUXXT76yaZUNJtmbF1fLSG2voTVZHYFb4XJceB60hifIqMuALOEtTdhdKzHwlRwgkM_hYJSQhCryJ19gwiLvxJEfu8ixaRb8ZXzatNQvpCPQRfns9joUZsZy4u370rIaAkiU05DaIQ6XclalGkCCO5P_p_GdlX1syw5yBnYuAk8utF4K1o7VKtmxe78Ij5yIO0htrmwk6SATqj6hGPP1t-yHgco9JnSg3aI59H-X-LChVMQgi3rcVgAFcZmN6t8yPsgooIdnVFjPjufMZGX5VEIZpncExbq8EoGTWA_iDRysxsHI-fWY35vAjdf8TQK3uA6XbrYp6qE-wwrqZx8-Kv8q-Wa4s4UiE8TtQ%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh4_XR4EvPkYA9v1vrTd9Np1u_nUWnhP34L08CtWlgOUAV8GhksGKp2pYhxtzxCVjeWTlaNhUeAUtmwEeqa94jWt4yIux6FZY37QkwFRMDrbzgC-6hLvIny3q9kXZh7gEdansORkYFRpwSFZCy3KOgjESidtK-FyJKvfd8FG-L8OJgTXrU5PrZDiqof0v2ouKGWaFOfhzQqBcj5d0mEXKsgQEZ73WDmnLY4mfbbPKrpx6zOwnVYwbhTKnZHRVUy52_jXsjAEyb6IUqRNpVOr6qzjxLTBblkZaoyHBMOmgIIar19JLUitrvrhxJNQASNpfmv4KDPs0_3j9DZGWhQREzD8D-Tw5kYWVXfU15sFfxW_4e28MmN1NnsB3aYLFKRNEAun6Mfe3_Arig%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh7ORY1WHARoDe6FKfec2DfAtGOoBOiSdZO0DRe4ssIV8Dy5XXTugNu2enxpMH8HrM9TP5R5zMXDtzhHX2_v_2psDemcA0HgBxjIKJZQFiz9v1Lzi1T6C1UBrmCN9Qb5aGXylQXoqgh8TTby9JzZkPdvRgstNOJrYfZX61F8zXeRHpGdQ1nSCXwE2v4fAmL2CETMTLE4TBnh22M2rOvQxfwz6h8FOjRRWU3ZAVZFo68_3y1zJq7NX5145ULEc-GNhtpCx-14DznY0K_6L8PYzBeI0RWCqI4ijv6ajDtOhIh4wNIDaocvLcB2qMR27jIvlQDDIxsotD7sf5nFUE-WGms5ihnUshqjqhwOEAoSBZ-pp_qT5K4WTD4IABhK81AgYNfBZ_cyalAt7A%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh4C4SSdYdy1svD4xA2TXU5i0WssDp03pq6XWpvKnswB4UI_6SBy1BtqDEbJRoxpRL9LPZ3AaD7uu_Mtk9ylLZYcCitAtNEaZB2nD1fiBbU0e9JB-C7Fu-Hovvqaivd4BmWMVOpZJoYNPQmLtrzn0hpMJ_MtvK4AkugXErtPfHtQSLantfJu0CdVnBNlC1HY6YMUWzVCqhFGFbGiSRqol0Ujg-zsK9DtEJjilrtWwPSReHa0KgEOmDFFQT0K23o_2G-jUe2XJ8-yHroHv77WR_1BsMdgLM7kreyXnZLgD0KzvxatpVJ9xIz8WDZmBTcg355svAtgzeBN_81OIvKpLPt_42V3H54QJHEOIV_MNfcUS_MZTdrGqbl7avypIbLm5HdXNQnkOO1xMw%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh4HJu1q759k1LekX9_pLBU-MQ3Rf-SrJRhRd8mMT81O4kgrgMeHknNjol3F8PbvBtPXI-HDTfRFn8_b_ZyM0reAMbZ3oxnVEKBK5ml-I04IHQEyavhbzjPrGaUp4KdGBNHCj1S83H646ec2Fs4MURaM-2-cC9AVdKeiwd_xaZTcqZXosol9cVK9a67G9JoG9eJg9MhYKk0SCBKqUtIM2v4xIliFVqW6J__YLcT9ykGHrLQQhFbz7QOfuxHDlOwB4799gJwFAKsYkwjU9FCpulQGX2mK4THS-W6WUC67s6HUEJZreaglFnSnnywrTHCWROfA_PGwcZgSS3w_vAI5Nw4Qkeb3InL44nINMX1oc8kyH_q6b4Pzl2tWoy1m_KNfm-ILHahn0zvsPw%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh42_faiBBcgbPqS5DwGuwrGtxj9susDSctPN1g1C4tJJNLUI3aukawf1aku5X_wrCPMCER4IaJtQ33hg0oG9TxdqonnjzbaNnv8PCgCtBLo2bhvdOJ_9TCRmRGWliqrkiBtgvI5x4fCiD3JoFYKXuf2sf7CuclmKJUrszcATrZqRHha28Mjk7MyeTv9q4QF0yYvM3pzLRD03DkDJyAcdZxNNP3RojHH5zJZLjtyYiD4-R03R7eAfTwR4T3S2P-QAacdQI6Of6-jUy72D5gI3cPkeo9q_Ax1BLWsdAMvrN1ncF_2qdodQUho_ig7NJ606JNotuTuymNzLrtdY0OFeO01sJgkHOCd_iRaZ0eczKArMe7yElMp4pb2tRv83yIN6oqdgm-FxQel2A%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh52EQc0bxB0951LIe0N5nctyRr1gc_SSWYaU67Nkl8oWot_rMeUyl4MhHDsmKD2kX5GQmRH11wYZn2BlVkASTJB3ac8gWnVEcCJOfqII5fzMGuDfewuBS9ay_NbscMa-oyBs75TRIBh3fUlS8ayvFTPdiI3gp24MbWA1IZpT44w5XuZS9JquBHouXJ3LQHi9NiSO5WMcIsixV101VeaU01Oorbjqswzg8JzLvgdq6F6fZcwDVLf2IGKvdExFYlIk4awpnFqPt_USGO22rTfe4dMqqNOuj91DWq_PQFJNkcvwAln8g7lQs03yNOwCr6xVSUInQssaHcuoy-sa4a6wsskeHr4gVey0I0oVG_qPqmRGKqZusnnw5f5eeFk8Q0Z4dwTSEps_rJOYg%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh6hCsifHY_bn5IAxQ0deWs8DqK8ZCaMXN1_WmNgIUoXj_rec6RRjLM3m6VoNBfNBi-3S2RKFYtRPbuVF0NzMd-bRWdL-idPSUilS9NHx2aq6n7Rp-5AA1D6-PV6cTWfQS8IMsOyqZdflvCVKBm-_LGKAgZmEdqB_WBFc311xcElg2w0Pg5AZyBs0akpnafnVJSS6ozyVjfxlDBpOQYwz34RKdC3cgvtuW4eAscXOasf_C7P-NjtLyhOpTQ2VoIPzhDZB4L8b9BP-7qfgFPzFi-GwyadlU4lZ6TkoHB94Pj1m5NROU5NScb_iNWHyh6VtARzRpLQlSJU9FbC-QIQZUIBnA2RlOyt5M8V3FFgl8Yfdut7RWFCPllO21PTOICNNNKiXak7irXoUA%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh4rq8LrzIgQKrJBlkU3ieoxp9zq3GoCWt2qzJCb484Gw666wWyPvB18Fmo2qpDBGKH0r6BPa_CisYIpvJVmmUA8G-Gy9ZBvLmPXVjiDX9HxCwvUCdNROLi01NVxtTn8jctYA1ViSpAGRR2NuMlk6oDYRtZx7BtNZI2T3ECyhzyOiyIf21RGGMEMjrxfGBMHtL2ahc3NpPqFmyie3gej8_UIrv3S8VQK-cfJGO8kpRVYugCMiPrJ_xEByWOuAPdHeT9lGUIaIWUXHY6CYfgfiOyPqRBkIIU3nEokULnu-UJdx_PCw6At2gh36RWQ3yZ71CuhFCDhBO39i9lIXTOPz6sE4cSJdkYmR-q8OjtQGRRVjJDrbdeDZZcp73HYqT_Orj_yT9Vn1-9CBg%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh57ibTtSsVQ06A5H-dTLaMEBAlTF_GnOsW2Dg5R9WSJTChe6dXxKhgXEwYNxLHABHWn0MOxlBZRrig2w9m_O48qINw40LiuRufQezaovc3oeImIHvTj-HgKtVU7i-jQs72LYflMbmQzlAPBA306ucwKvtjEIzdUQiEDMv6LjDKY9h6HLoLcURYEgqvW_LfEGsyk3AYv8tjwuw4LoNxOoAnUZTbavGm_ko7F1kYuGRGPGDTqGXTRcGALRp3-XEQ31m4s-mRGPJfRUfKITu3F97qO5ETUN24sa0c_L7i7crJEUX1lIi-4f9mocL3RXE_bpZixLhnFoqvXBX1Fm726HQNHkKpy4DDq7bloBrX3ZXe4dv8-206ET_8sWRHJWu-LgJVTlgJTxopoZQ%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh6PiKn7hhxRBLPYQRtCyymRFodLg69LtKPL9xMdX_15s7Rsz6DlY2gMsA2zMrjVZP14YK7dJD4LlaLvL8g60t_QR5SzMyq0VHihjFmJPiQNxRXZveIN4cU4-f81FNnGS866Zl7ZQNafjoNm44bSP-skSTMxHQDGTxlUXK3rUOswZC-S4LWevor0cdPTPWnwGukdW4IVP8VIWyjdjHwnLfhBiXbreYupntR2QB1eB7rZnLdTGB2pPewK_wLbVMn16El2eXTJjviQ2_IGyZlx4I4QwmGFtJxWJtmvr5SJ7NCQnRyqu3jinQHMcAow2qtw4IiNC5S-Y5HNUoJC7o-uEaeJvOMGtGvVvkuCY3JtLTF7xcZYH6X9KG9caSaDz1XvkbedmgGB-WHy0A%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh5nqRLJ6m8ogZnCOyO9H6nPwvuCGOOGLPbd7gQ1Xy3iN1-OoG-cjz-e9FBRIYbmx0vNh_eBPmqVnqAfdChbMbBDvwtfVKX-HzqjfDzQGUZ-VtAeP_EffEZga_wFe4WoqJGZnaNJOlCgaD1dpVzEc9d1nG4nq11QZGi2Zp99zlsQjwNm699JE9uBNszKb9GuVlfHAimQL4uzftrFvllwdUb7bsl3VZwBMATF2_WF1VT_aYa4TA3ps8tyZt7Gq79A-oc-Xq0Aqheago_oI4WOfY3FRiKl2MU8FApnx0Kjj6zKtHfRMEM8hq3lhHBGln0DxEWZC2qcooeWLRyITUUrJ-v0mVNP2n_ibZ1ykXjbIzeNhW2uUtECM1MgHRgpOPscjlAehPZ-P3gwTA%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73adeDPo21lXu9Iu8G-RT-MWyZ5232AJ8_KaAQwM00MpAPNXDlWlRqZsh15I9kI2N8lWTjGjHSZ4GM9-Ju8QHhnVzUKFh2nFCPLqqdTI_6IA74JOvTHKnQ52SBCPinzT1InTRYsqQcApTIzO76sc-Mm0FFWlrmMbPjZ3T_a410BbzfbrfpaomLwz0qmonJ7FIi5NwRflY6bzKfRY1JJuViLhY8uR4j-JXkyDcasc4Dy_qVvrrADhTeevj4ivLzuztGL5CSVB3kXZ3a5dxQQ48EZNWjma88-CBZYS3DWx3LXnNb3oXQ45NAvRLMvO1yo9WqqpY-uKTOo8z0zXZdTBxltnf4SG3vzAv8HoQ9aJXD6b6fkistj_TLfFsZADGM6NJZGORUa2U8-b1kxppWoxe2jZA%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73adeDPo21lXu9kAQ1Z_N2om1pnqWfnUVczNJB1-tS2yciSyhz74tfw4fVaA5H_ktEjNcXeI-3tdpyiQi2lRPD-gMS6CbebLNaLmch2MsxXnKriXp6-V0oprOOZjIjCn6_wCP-caa0K63CZbriQj0zIotPRWu326IwkTEw9VrstUZ1Dp_xbnFns1EM3Cm5q8XWMJQeUXS7MX0Dzp_dUT9cGQgiXU0vhgCyXhqpD1Qb7nFJImymSk9N_P1qs0LCyIbOcT8HmbvNZ8OA9auZ3kX26wFtLrUrlD2yE0PDvC80s9mEuF2O-giXMMd1mx0wSUFKWsxvzubtabyt2is_F5Kvc0OzQFq5D4R4uKlSsdW9lZetYJcLg0uWN2dWiRgIDeWKY6XxqWFQMZ_Qozhrmgnsbfg%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73adeDPo21lXu84SMosTIgzwt1JaBWO_KrYM2Rcv9oONDZZkbVgE_E0N_Mdqh2nWrVyFUultCrRGuqIG984qo7rWr58K0VsYi0vOgT7oo49iJ-YosEps_qKVsSEJqQWK0qhxPyq_BAfH3JdBHmtqNERAqRjFKGGSsz8Hyk2HXXV7SRnYWWKZ-MiPylyXSkfy20c5g6CTLAi6TlQaG8JOVArprudAg9jLHYzlosRzR8ICN1HwNi1Npx-BieHKS-27AvjprBR0z5HSBLBO2gZPoqxaCeh8P4JF1UB2T3ecvV4_eh4ba5NcRzpXqgjYOGRdDsoK6ioz41yi5I5XMFsVqczR4CpIHgFk3d5nqFnDato6_GAwjMouhTNKYPiTVhPKzgXqOXUKKVLGQTPbBRisCOzVg%3D%3D'
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
