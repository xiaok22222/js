

const jobname = '看看赚'
const $ = Env(jobname)


let TokenArr = [
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdDDxKVjTQOXOkt6EBaVhHxSiX_KxV_0zXLjmd8erp-CsVXmlO8vRLMJN5_MfJy0fmz2FlNQmOFCOlitEU647JeJqWx1iPW4GWId6Y_8vieoM-yjGw1KbTr9r1kNpJ8EQCRhN8DVoPwJTvt-vcEB5OoX4T03zsKTo5Y7TZkHcBgVLduJsvsfILUkTIbsnIHOvjMML0Ioj9LG6USgF4N6sI7IKgmhNDgldLCnLF3cIuYC1vZxvr5Q4PGYrg5RzL7J8yA9i6s5psP9sIhwVM1mtqD8lGP8Mdkh0D7KPVCN1-9h7DKuPHhnTmnwT_6e2PmleVUfefKwFFvm2izgtklvGm0dXbZ75VNuJqbr8UgzODdda5BkHxKYNxvSh_Bo3CeszwU5SZ00qMR-C-mtPghs2tSg%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdDDxKVjTQOXNOad9HuYCB6j6s6o3TKzUmWhvAgDRC3GspV8xpMoSZ75TvZra6YWC_aI994p97n5FYhEz2SP7enH_zGkAntjwc9m5iMeBbv2Sv3OT2cTJgku_s6KI0Ha1Amr4HWIXvNMI46pddJu60aKeBeasMCol3ws8dbRkUqNUQkUH8u6UFdVxWxbQjMfQK5XWQvgBcldnHDLyn1sk9V6zKo5-kEQyxRpbvOfZ63EOnXof33RPiOE5_q8EyQtySS-5PwvOTfnc03F-NRnU5mYad_BWeXMjF3ZfdWyRcieDgLCNG1bPc6Q2e3Tp_AXZVJJJctInsX2i1sV2hz2lgDp5lTpdEuX83wc_jNEFPcal1MwcqLqVr1giiPtcKtgTrfZbjbX_je9ryPI2DhVHDrw%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdDDxKVjTQOXP80SH1YlQVMwPX5sk5ZWxZ1r-qdM4bcjeApJ8TN5O3zI_sFrB2Oc_v8hIy6Ngy4toluh3AON1zEGia6dDNGe_4O5TpkFaIEQhG-jeL5fUEYIsQjgcoEczFilFn8F-Wo3QdX9mY8fHJ9qfSCT9mp6P6Ci09mLxRPW9RVTTmqUPLHlis-z4F6rmMGz0g1s7qDmuSbkuB5_Rx5hDoUhVLBwtYZxIz5WaP8KhxfFr_3DVRR2uk1XTnZMK4LVm7Y0Pysrx4CjO-v_c4Wwwlor1Eh1qk22GkxHqfBX7cD7q47sPbKuTxPxGpreJf02iuT8bKIRtBKCXU54-vfiBzRjb_4RrV-ab6wI4oOlzEArFJuC8Lu7Jvn76rAFOGeZz2jXFfbTePGa-t2yds2Q%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdUy1Kq8rdjKVBQLkZ0Oirr4SmoJ9sVW04Z1-6OLKg3Ng6HR-VQ1P1IRsXxXBy3ROEmmtmTH_NpJKgR8y1ylTsJflEggLbleyuvIMyQephYZm89Dq_dN3PdCo55p3XbLv-xKHdT_MIU0PBIuWwg9Fd2SHk2YQS9FtR3AUXITcLGmlDUbIIYJ75fXsLMoCXRnu04vbNQ-NJNmbnwb9ij6x8AD01vLcY2QBPKQuC23dFp-wol1ryg2NlcAybRIEGMGcki2XmJhnbg24eVsGLP_5AcIGplBKD2sG13QkBPPwl93NHNguQNuCK3DQ2aq-By4D_bOdN2-gvabJEZjUGgpkdObwQNHdNMErCeDssmgwongLN7FBzCwT35ffcagxS7TxM0y0Pz5_LxXPTtIIB6kHW_g%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdUy1Kq8rdjKVTSAkt8MELOluuNc5clkZypERiULHf0ynOeABLycHNCpGh_sn_b_db-sRaqbhfVayRbktiBj9eTKFDuwe1433FTHNTlmgEwwmaXPv9mk13AB-0JcvDs5RugtbRzb3am6HXMaxobx4nhFLb2NkJTdJBo57n4LxAkFmtHAV0oagJCOv7glUFjeeyARQG-I4I5XZGdkl5KI3C_u4JDYNPc5GPG8T3TnfLKiEaYtoiMkwGvttxKA_2UMe6FblUrJWYkGbHsIP7Xr2NAHYfhmiRnmL1BKaiY4uePI0PjJz-nL1jGAr8pcwf1uxtVXXWk0jqC-pkNFQsiiW03tnJhXi2T_MdXwjz15OlK204m5jQdSFZncu2ha_roVTK5PTZtbxdXCbbg608lazxTQ%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdUy1Kq8rdjKXhg2P7AhlB3eXg6qzkzLunN0uKOLWk695xTjEgDKlOL77aYP7GR9QqDUl5RnXbTWzU937ezoHx1t0b7JExXb4uMhMZhcqdPU18BOp8zgg705Mn99qux5rqZkOEIco2K6VBfER2HgQcm9KSTiaKTR-OvhK3dvvI4j-X_aGhLogwwM_xaJ7qsGMgvVjU16ligUqIiOudssNs6ClNl5LEzVlQh-Ob89JCg3PnZQPF5KkSiA7Cd7jn0lrA4yFT8K_4go4fDbENESrXF_B1kvrScCrrHOkF6zVxl-vXWFI_B5E75-lepG0feTLG8CC_8X4oQWcSG89Lh5W-eZs3aONZot1pm2VvlNQhB97CxGPRrkAZkYdM31YAQavZjIzhGoJNSAPYgIJV0LnixQ%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdUy1Kq8rdjKUcbsQPzNAyJ3iLEnEjCkF3Mj1_CWnyQXPHIjDNgvj9YV0RYaj0KH2cpKYHrnm-04HB1s_vEfO-E8IhCzrnzSc_BOvGCs-lQPsvs_-7Gwqu0YiSegkLX3ymIgf8IzfkGMbBBKzl2RM93FwDeDrqPQs6pjcuTneyLjH7QBP2ROiJzIIVVHSIUy32XuCEhF69_vOB8mUP8G6ZrAwPcSa5VpEX7MNq6QT1SDPhK2lA0XmYqN__XCg00oTjXfF-Eksd3PuxOXwB6C4hTEclwdQG5En1yhSpy8W3i21UX5aQDER2p4EhllCiQbbjjESOo6tVhPbDoQjCt2Prz5JztjNcKxS936-IkJXvEzkpAdu8DnZLa08SOA2GW7GquJ2B6P_Bt63NjJtjc5EMBQ%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdUy1Kq8rdjKWRIQEAM9VSdHjLU98trmrWJT728A8CMxUYRcdG9Kvw2mY8PwH_5PqApUrt5exI8t8_VNwjZHehywjc0DP8yK5SPOqvATzIICNOMpBOLVq7fcvYc5k_ktO5513ntncx57jydxtGpjDMSiUCOSycEcaLWcpQm0y9j8G3GLtnbAm-mesz9CfIemLM5tqWvppEhrPKe3hC9EDhHhuBja5bGbJZxNEb5C3fE02VNjQaSfVInfS61FrR2Zz0rgzxkG5AwhDjJWzOyIEdV_9HH0LMhL6wFuDohPwdQm9byNB6-JIHs2ihVfgoG1gMysCndq-l_RZ9FKa8ZEkEzyP9fKhLoyWQdMhGwMH6vfmFRoVZWC39UsnS5ye7ve7PPTbcHo3-UhM_ZRrp1Y5ZNw%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdUy1Kq8rdjKWNw8h2Zb2995ZbrYqZyRoTL-IOurQCNkZg-IuY1C6l1hDX0gDSkHdSKuTgj4ShamkkPe4tpA9yfGoyLroMEnhLiAk3Wr5eJU4OiXQt3IwCTWg7RyZ0Srd39P1qiE3EVapt3GT3ZK8CqE6QMlVzlZzYRd1Tb4Sd1UxZ-OpLUQOjcIvsM7ZVw4B5RG9i0eBIjYTx9OjVuZ8X3OR2T-8RKMg-bzOlJrGUIiVq72hHafg1GWyzmRiLILQjh8NyQ6S_fuNgD8SmJ-g_7oAUBfH7YxVB7cDU0kCBFI4i5rmQXGi2UqQ00fvZA5DRUOpcsfgKa3kuhpMXhEWAYECu_1gXxizRuqVJww9oyXADusnOn69iLLPBRE42gLXPiu11VFY-xuwF2C-6apHWzg%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdV4-bR8G0LukXaXyeuOpAlDlt-wuwpNdzlz_2GrR4ec-zjTxAZlprj_GlCycy0_tlpI5rdtW2qv8OJKsdEPG1RbckoBRrDWcDLnBUTz95xmt0h0VNlb1kXTKiGBawCmHw8MK--NeSC9i_YU0HYRTCMj75StxYu8ozth1hm6oErmUE9z6XZww6QdOQMRgPXHYCHQK5tYfmGcLh74gnDZa_BynkVBnXHIndWwZRckEAXpmX9HZeAPCkUH9cXlWM-NV2KkYO7d8_S9LxPtKSb7dbol8qE8eMJgDVY5elcBzo_cw15NmEUE6053qhMYd0IeiGOyqal7lEvzsnBQCG2zLiDyP4RzdIDHBTR9yPeEbYf4OMYtVhuLAlWKqdeaYlSCY0QuBl1zumRZF_RQh0BcU6xg%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdV4-bR8G0LuklAkyU01qyoQGCypH8vJ7LBUiATQeyiZp-_0P4NjoxkMP73naFOKT9ZBfcW2aa15BctJfA5UpQ4gTTTSIOoRHyaW-GNtTK78IIaPpHRslmh-7Pq_LnBmbbL40yMDLVk1_Ooob78A5yvk2RTNvckuwczR7E6igzKQps0lBDQWOjc8N2XtjMz1Hq_RECsBp15NFTC1xX2mzxqluNZy7HheTJdjpoHBUtK15vTFY1FWUV7j_oCLFCT3DZRqnc5b2HikvSUAPaMlT2Q6LiqNf0nCQ2gMv8XfNdm5sOWbClJDLbpM48psxr2tOldunM7PeobRMq9FUvntnGHkshgRutfwNF2Idr_-sUGjfpOI5hE6aDiusMY7mMjSScZ7k_pz-SRqjCxR6zcFf-Pw%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdV4-bR8G0LukOK2DijuaWQhwnt_lJ2yIFK3oEch1tVjq7EYs-EyYQyf1DlnWh5IISy49KUIOm-6SELkGeAl0aWkeqCXJKd-vBnpL1MLFw_XYZs2vi8ud9fFoaRqLSmRIS51_bxG6Oqs6r70U2iMYOXvrPHoqLXN0pc8MpyQavsN15zlLfUlOfzc9sWZ5jo14nTWIOHar3Ko6HV9Qc4psLzYUJTxHW45mYgm645nTmB0zsMHmNiRAhOltOy40WRgyHZUuFDd37TP_MPMMXKfjWza7956lenrudM8-wc5wJcpMZdvAEe5nxfxQd9a3xosDMz3TY5pzN_52zLQCg2KTDuQc_4estydr9lcox-9SOj-i_3KbOBMS_2MwRiGZQPe0CHHJQ_GtN0pwJwrW-3iqSGg%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdV4-bR8G0LulpFsltpDhM-VcRs0KaMGsKKsFPtrUeJdttOQelKHwaDrWzZayt0ZpxA7kFqHJI1eL2ekwlfAps5lk-vXhilJyqU_iOVI-pcij-yxoO7U91HI8Jp8UX3v58Hysvtd5ah4qW7y622wiGh3rtoOCUkaWre0Gk-L3l6jMwKIyLTXzWYQE1pIKi5zDCBeye0L7VXfAbLkxODpY3I2fN22C6Uhv66o41kprWr2YhZbyTp-scmVyI0pWZLS7oGtMWcJ1kT8ydnzb-V6ByC5LnbMhU_MLz2f1OufhzqoA1VPyhFUjRItiHgRiGigIrEfmv9rKp3P5AtVTbsyTVTPfuag9Kpl3Gmp6fXhO-CsvPJcswvrkJ4SZ1e6kBRY73ICB00078HLzvlUB-8Hbw3Q%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdV4-bR8G0Luk_TqF0NtvGNtFy9jP96xdazNgJu9FgCZAZu7mCxFCQUA8alJjvF51Wt4Mpx3a0zPT6M7av2rxqUjoJrEOM6f7B1HbqTV0EzhfAqKphsK7PfgzpsMeAaJP6QO8kwpJTUwsFuQyIe26ACcZGkRsqhR2lABYTf_iHHceUbUH_y--h6C5q4XD3XuMxKRFyndk4cpMjptCd-8P6QX3fmX8pymWsYvf8Z8owbulwMjL_Br6XjDkWoYdKFe2uxpDnzFlX9rVRMdJW7WwPPkLoptGclFXEYq58oeUGwgfu1yN4cu7B8UQvwrOSfSOC5JvlsruMglldf_Uc41hr1k8_GWAlZOLGvNqoeI8pxT6fz4RXTvvLqRxu8nWtxUtRHElKwE2p8Zgbnehxb6_SZw%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdV4-bR8G0Lumd_F9mKHviZGm9jFZIb3GH6zgYYAK6kPeV3N2oHi8sjO7L3PNPLMwG3QjbDOc8awNe3h8sXX8DVCi6dCHFvcJCRw8jl3S2KzqhZDpTGZJDT0lwt-7YY7Kgd5TCsrQlveOQY_QqAEyw2za9dO3hBeAnI_-lXiBlJgVZFyVMOdxdlLhnh7g6J_7h6fi5hKbLq-c7YrQmlPuhOdtSOTaG2x5_H5RqhzZIlTJhavNTJ0uO5un-mBay9xu2FxVa0UuMxzEAXBa6ep0vxg8ndIYlACAeeFJfQyvyLOK8VVOpce088cfeuJ7fhwDLlsJO5let9RORVkBRFFCpoYWgs9r30CoYr2U2z9_jPZBjLlNW9mI0s8LaPGQ0qJlPrEyUilAI97UQCMmXhoyxJw%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdV4-bR8G0LukzdvgAwixf8EbuxaydAwlk2Bp0DK6NvfsY-zIbGNmPxbu5a-yTiJXFqDIuHEJ2Awj2kPN4We7D5GoaALHNNLxjRrZiu51OMb8UiLMdnawcZsW4sqDMDPe73CubyQVP4khddwZ_15Wlh9H9mfNkKqDZ_IXOU8MX188Ll4GeIJ5NZXnIMCad7t7khw2AqBarBbqmLeN3xugVc9LqQWqAJUYNgq0tRa8-O0uIkkbGNQsH3_H-1baz1C-WqDS5XZenSsB3jBIrpdYylbAtKS18nEopdRS1tx1iSzJvVdYAGKilC0OfCscMzGKD3z4a2mxtOg5z3g3Rfr86QiFpX5cVQZRvgodppwavhnrbgBnj1nXfy9-JrYtYUwuz0zMpuUpXcmBqOetG9IlzHQ%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdptm-iYd2D7ZuWi84gXF8kietJHtyVh3kGRua1nZqyitWNtJz3ShjNi-YaiaU5GJIY4B-Kz8IciMMFy1TZwyDmuTWD0Rg0dxeqteh4zr8thvJWuMco1n8ebrAfUMPiNdlvvwlMtmM0e6C_bqAkyYS6kUiTsmR0r4NnW3doIoXz8TqL2k3c4kcWTBo6mjqGgeA0yVKyNLIYzaeTjY3-KUEIYTPIbEPgAdEyrMVT1uRJkgau5uR3003U1zsHmJD-Q4SyVMpVhDirOG5LOmg7ZSxNErtFCMx_Hahj5OPV6q_UjGNclTbprpmIPCxyZtRM4_eOqOXkb97Xy3ifMavFByMugQnZF7CYwjW7FFU_WVr84Y2lof_42cQ5lMsWNJMGn4MWRB4OZ-47K_7PhkWoAEpVw%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdptm-iYd2D7Z3KjDJ0Xg2y9PCCoYqShp9o7eK9jwSSV6V26jOlCryN7ZzPHSf2kzMH56bqaJjmHTTm3_tYc-hucBRFFhpKeCDBEbYilZBT1_a_CzpKHtKGP8DFxDJ9wOsuf-gh9CfH5z10J3JQACNJi5R61rrymw4vlcuSYkJItsRxpMGUpW7z4I0AbxbVeDvbhLkB9IBkgmns3AyKLoopV8GnwuY44EDwMgeNSqRlzxTNz-k-QCgJesn7HgOYr-Kw_kCkioOuU-LrQ68XEoevZ6vBER1P566-vcaQ8b77WuSR-zDoNchK-dNmgm2_uEgiVfrif1UAGsBAMk9TJCW2AruGMuzq3xIAN0K-yIsqEdE4qgJifwCSFNz0WgXbSYrlKTj7XybkoXY5tfuNslrNw%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdptm-iYd2D7aGpMCdqOb1UXQLFFInMUbKUBjHVSevIMKHo7PDJBZeT_pPiqe22wKCFaz9P4jFDZ91uxmrXanZDBYNWtJceRC6mjykY313mB52XifkpzZigJhKmRhm6vtQSFqIA1mMe20O_EI1_iM1_NZ3XrwQdaHFDmtSd3CXspbTZkghjRmOx789a8Su9QB-xsYJP2u3Mhl1ja58NkMb9MRR5TbCq9HgeZjpoDLe9s7oyHAfX6yRFAIN3f_fWeFim2ysVomKMjv_vupAFQa1umIHndmmGcX6lamKA-kvVK3TSe4w9ZrVp_2M9xVxEtTBcr-JKmocAIdMnDdncXdthgWGwDrXUyBK2wL1eMNXWLtWaHSrc0qPKOTQGf7nSMNnukJAwi4rjhsFSdlt7oDVyw%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdptm-iYd2D7bbdT2QbD-sZnZW4WHuBvboUaDZLodVIFpkAlJmBX17RE5TSOan4cMDMtSkLJeNc6FKstkxkkLHaNsDNsabVVuSSyZezWBQBm_id-VJi9FrtyfGyz6i3q9l4-n1b0c0gEhia4Ju6M-wvMsfMlUJXCTRW-Yn9tZ1DXGZU35BdKEZhsFQsGREFJfN-EWUOIkwG3zl8ncDuBngTgSTLcVqIVkOD_nrfBYJlKKLHhGMTZr0T0zxuuO4FbACoicwsUSZftlIo5-IcRu7-aiv4CqDeBziyPOLwagxhI7IzLjY61GW6nrs_JQWxuj9uOptZaR3FNFX_hvTMp0rGyztZ60T6l3a0VuGuiPCBSc6x8f3xXsjbe7Q7TlOKUT1EOA--Jnn1kVE4zfdHnHdyw%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdptm-iYd2D7YOsJuf399pTjy54z3fuv5pe7wwpV1P9bGe7rkQAeFCg8q-YGN7CpMj-LCD6_hazWc1t8Ol80pot6knGOunX3KvTD57u4vz_HVBtQoM2RYItFoJj_8bY93Lw2LwNEAJvM3kEy083F-76FZmPcpcDL8vY6MlUZRGbssY2ziSh6eJitCXWTG-FnJ4fFNHCeKDwcgdWYm1YjVEUDwjHsNnFeqJovDFPh6LOHzt9d3EvPm1pGunMlrcvQ9zAALhNShFhXCkRZTJz_ywqp7KtBaDUBWskFa7ecdshJddE3CKXAZbsE_EWeDeIivFlnpN8O0Yaq99dFzyehCOe_xaAG42HThHWwyly2-lXvgKEFwPgB6FOajjukP-c8p8dBtGMybpZA_pF8gu3ETZtQ%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdptm-iYd2D7YLQs3baAFLM4iZs7e1XyhXFlpCfNAya23WG19ueqz4z2Ee4ls68YYwLDhS2-1vn-Zo97RVD83U9-tQcTcELqJSR5B77VWssXcBODTcnnUbDuycSav1lLWT1ucchE-IcR5lnHoA2paBEdxswVXQ_5ls420UgwIRr49ICDG4AC46sIu_-rVmPL7QDYwbLpoi4eO-t5v1P4MDlAj_brz0MDGEAqgtvBK-r3tex8_HCN49nPZqzC9DdH3mRHs5jZc_5RHcUBNOvfyqtpgPBlfreLcG6jaNfg_b4S-V6b1HJpvhzSZ0Gp5_USM1t56up_D2oonSbfLFJ96KwePS6O--7PqmoOWrUmwNRppxGG2Kcgk57hAx_ZjoXMaLWiVf3-8VvztVwLnVpVD3dg%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdptm-iYd2D7aE1wm-3G_YuTUo0ZlGuhq1DGMvkSZ49fu3a4k5ooiDN4SDJs0uP9-PiE1rEgvMP2FKuAP9uC4j48IkcfJaTZSzV1KkA2nCpUCgWRH6d_rLZIKc4uGtjJ5e5IIXo8ReKtxRIW1CkDDWdss9ygCsXrTR0hmw7VlKqfMP8l5hCKxfY3ZAJ7uuNUHOqdyATXeX19IDuHU-MrW7eW8acz5xlVCe7iGkbVUUVn5DFik5TDYUvwfqIgM2Zj4POqhc8c-AdSbjxmNh2iPQK_2GB-jDeOXghkRqgxvuyM8hOUaLrlafz1peiubWAuItKCu4b20uPrOChe7MxDvMweF89kKjtm8qmLHgeQnoVsbTZGQ1CCCB7oPxtXyWR0rVy9cIM1redKE9IXkL0Swkvg%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdptm-iYd2D7aXg2sQkc1oB--seTmbtYVMqXXHgbHTwtOaJL8Nnwmelh5H0cGs3PJDaUEJvqCT18DUKElPJmdTE5eGPlc2ByfPsTu2iQ9KfCDdbTxkgGTI-mULKvrWDDFHAaDzeRxyRCJXeMNcI17KC8K0dWD-NbVUs5BGME0G2xtR66wu7SfyUqRXtSyzIvOaTaRwsts0jDJQEGh14g0-9y4nwxuaCEkHvndnIOgU3CJYfnBhTdv47-BZVI3epquyV977t7ttVTSMA5hBZk1ERdPiCecGTmfyu9uuGi9ai_8wM_fyk1fQNYon4CCOMf0lzhjTjYKoglG3ifvrF0idRdCRA07udw69ndCdQ7aaQrk6eJGcQ1yNyWXdg_Y8TygG3JBtfB9UFJxkQXQ4XD0c9A%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdptm-iYd2D7a9Wv4VWvmDlN6pmloG2shCx-TwTSEZWSqmh47kyLSVJCcH0tlSK_v7le7KrVqgY1bvct2nDFj53Gbugk0JpvwMCcJhaKnoBEwe41Z3J6tmgEp1VeoBziBWeOpw_wQ2olSk0jX_uxk8S1EjR-il5Ovjv-CTEX1WqIfq9RiOpultzK88aGsdMcmZQJmG8BpCCL_dA71PQOtrFuRy27_lPTdAhXoRGpsodpZKtMlMkIKwjIyIjtWZHk7zGQp9bd3cOg1nxICDS5k-_8bkpCZ8OGJ7v9boe11V60VwV1rgwyC4bWBRaogh4ZsazeXEhu1kCA8iLybD4QHtsbjU0rsIbRNKU4xd07cH3cwynL6yDd5VgZG54xijSjxHLZKR2o6CyUF-QRseMghtvQ%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdptm-iYd2D7aMphIUo0vyKDcs8ZhlHYuXk37MZ_pkYFtKr-7LGQDqxqnRUU_y44wXIHgmLnoaDoc4zeigYNblZemHEf4bOR3F8qDm1HVTXdh45uaFMFM0QPSFOTzPxFAzfiKfgXCJRb8R8MQtNq5RBZo314mbo-7NH3royr5t0gns7Ao4-wl97peGgPuiipf_9L_bWhJ34IzrkRRqLHp63N-o5_cn5ZvrZxVyhn7p54iDD1u6GLkVW3uiYIbOhUYErwgDEQ9CaQ0s83Oz2kSg9Asa6jJlcl5E47qHqAJNkQTa_kSxctQe154F-T_YtqSBC_yyURdx-Jr-rfrqnGA8fU5nO7_1v0ECH_NgBqOf2BkzVp37Iym589Jo3PciTMpooCLrt2kNwtGX5Rid0gI7iw%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdptm-iYd2D7b08asCkhHDEu_iS-K3Sp2Oj8WavtDat7kJxo_9O6-zCPFb53fddNupNEC4Yryv9srD3jVO3-zsxkgmMQJYIKzNEcj_iXaCIEqiMsBKWma0R1a8E1-chY5XihO_uGlzqkZUT7N_uZ4F0e8VwJMj8cfe4ixbjWmXITEurBk9u5HQPA804zfVWqXWE2Fys_D7VPzlSGDkr4AysbG6rGzhhTtDC4Pd4QFKFXgQdOupdLmWsTAweE5C1UZ9DpNpshk6U6DcDsjhqRDvzJDLWK-2FfDE4R2wmu6Z-bk-FOxAqp_n71azWKS3C9KQGVVQ2WB8RYF129U5Sm9dTkVDPMggAP4YjhCyViI-G6fAtNkEyv6fq1LKXGzgDJ_HiKVflg_JFAKXgk3ZLD5rBw%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdptm-iYd2D7apeLK6W-nxgJ4uBaSQK5bxmU8CYtl6W7pDslGTCcsz9EotSQPESiF0WmGDZMXWbK3o8KzblAHLXZwMPp5dqHpTjuibJRKlO8nqvcHIltFl-jA8TJdLTulGpU2bW3GdhQuUx9Q5KdxTUE3YPH46EDJq0tnL4So9ikt4FM_c6qH_aq2Ttv9Q-crjwi-uP88w3VgBO8RCmFK2ilqhN39wcj8bUeF9_djVgQZXE6hmUTfe2B9wv7dpoixVAPFYvrz-mGTsuq3tTFBleLj9Inop5j2bVjKFj-5gpVS_1JEAFdzv_8slWCZj9FOwTw5LSrApVsyBHiY8nOaWwjtNzg8lPXKCwYVxgkALMOPtlWOvpYkCBxPT_QwLVmU0gSZNQlYOccYyW8M8_tORoA%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0e5nGo4iqfTWzw_zO9bEqSOk2yHiqwOPdptm-iYd2D7ZsfArKys2LJ9GOiUqFAgV4j4sgGmlTU25JSb0QyevTkEz2QM1mv8tXlQZYUA7DREQ8isdBTg_Yu105mSKGjdgRszI4DU_FlVFE1SDNX2uSrvUoPtYTn3JDawDQNj5q7FdYza_DXt0QdH5aTK1jpbZ-eXb9RaSB1qZEpIQ0a2Ua-0wjEG-0SmJhcUaJKxj1dYKxJ20Zg4_YQQa-CZZjIRPEt9JQaxcj0ABEhgE6l_JmVIhRUCbwpOWQ0zx-KqaAuWgWydPJcWH68eWO3xYKZNc9NOQuF4pmiSU_WiRUERsV32_fFf4FZk6QlJaN8tyd4IG9hugunzpkgiNiUpbZ7wSi7msE0WiuHrIcaD_zUqoy2ITiNRlvN5wze5U3LW96UuoNYDZzwS099w%3D%3D'

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
