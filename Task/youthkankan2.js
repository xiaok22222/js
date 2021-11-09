

const jobname = '看看赚'
const $ = Env(jobname)


let TokenArr = [
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpL-qMJam6dtNQoRV0dxMaM-BUC3n5HczXYXihOawS927rPapITiRrdUsbElkxRBZacexL0j85mMBFhqkFPwJEpHXal6UI-gHb9ff1Ukrdnhja_bNJUcaEgD1WS8ebo5nPH8E0T4za6TG-dM4-xFjv3ndcukkr4wxvjfXUpaoPIykVwE_-DaOZ1NRPo9oGHxiQ7-CLVDajv4BHLIN9RQVXOIvhWbHVHjhG7IBTOW6fw6qPsRgwc0qGziZPlyLjaDep3cCDMm3ye0UdR7HAlqRaQ1c0kgszh4xU3tXmi6XTXNLBokO6KomWaKW_LnN33lf3AL0j2TFJGJ07jHgW7sgiHgp8kPobdD1hnzYaIj4wuCGWEZ98rD5Nguo-j0IzNorXcra8GCZZwlweFDUrKHFsGQ%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpL-qMJam6dtNQ2FVjVHjVSStUptkklEHKeRdvBGrc3TcS8uOuyZj2LllGFcUuwL0JU5ivz_etjdBisqHWjDST-NdEsA4h2f1Rlphpw8CnD4fOLjruiHh5MNHohws14adKk-IpXoLBhw4UKKIxfoiHTHK-ughiRT9DfpENMOfaIujHqa70IK64qpmTIeakaUzc_LisHEMFs1WgJrBNLyKPjwP0pUHcsk8DYeh1yGabC8V_QztY65TDsQir1Kv1ozRXC7mbiVqfrl6bWwQk1DtgqeOFVaItSgRLhfeP8S48Lv1WIVb-5Cs7WXbiqZv57PujdtUG1JxtbbLOKoU2N8MURrcyaSHUOEA_1-UbEr7yuzD8dVUkXuhBlkB7udgj1MTXf2tjxqJ9678gvhENqizhrw%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpL-qMJam6dtN9mSY14DE4DVjE0-tpfrQgxX5Wp8snb6Rz97nsw5uqHVrrroxiKKwr2mLz_cGcpF1t2v2eR-CJi2vy59ub6oG7IgejzR_ZghRXvqtUU_XxKGBVuFt6ktjk_A1V_HzJv5NDHvDs8uqakslFRFmo1Hvk_iwtb80fNHIHhpht-eMBkwp5EoWA3Oq-OvGq6ktmovyVChMyyhAmpTCWuOXHLKg8JGORXyl7XRz2MnxdL0vUEz-EChSJHnuhVKCuHHDceDBn12w0WvRhn5VckGSj9_-_RRr9rddPyeaL3kn_ZNQz0dNRpOi-pRKPJMbOQloVRzQKByHjvuH6AiFwtIbap0Gsrv-9wLVfvyL1198YPLozsxzfQhEAo6_uixtwHSkE461VEoLauSgh1A%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpL-qMJam6dtNsc0n47NoU87Hk6BFIz5Qm1B1tVKAHx1gvvET2o8Lz_WVhN1upq22tFYeWyDuMpaC9iduDKTe-CIuD63fwOXrGwWZ4zYxp0vqByL1XWemoG4nBGCwMy2mw_mFAr7HGPXHEJy0TiauKOAUQe8KRQfdJyTc4xxwPmVrhwMXm-8Zpud64XN1ONJ_TCllgTvUNh7tKSco-fzfLnYBmByazxi0QjbJm1cWrlcLPgrPKx1qIZk1BmNXCZHd1dmXXAQvf97_pEVg2YWHSQl9rjC6rQ_oAfAM08_PHxoWlh6jhRjJ1Ab8FQGDUMKss0UKSy6Kx0bzBEKs6SvtafaJHPt8tTTf-_D3SYMQa6r_LC27ZucvO3AQdSAE_MljzC-lJVq6krJt858cMOuinRA%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpL-qMJam6dtPfG16zTAgZU_AzQHWG_IVu7oLbeK0bEp_OuRGoNRsfJX9zKd0aLm7vJ_1-kVG-3I2nckvyv-Asq7kdWZ1PZx7AJMCdkbPVSeGPCv54fHblt1EGpxnGiab_1gcs_kAyk28Iq8lB9qUGKk5mHfE8rvY5vJ0Pzf45uKvaUaMiI8kiYusXP2FtWiwquZ1lh51A1aYi76je8UePrz1q4a9xqYwhJSVTL25rjwpBGKve8oHhk2xGh30ceT1NvcbxIoRuXItEZzhUJERAS6SzF-oeBsAlwANKtCO3qvONanrW3ssTu4LKA04K5yVfNi8aWMzCOnTtVdIJrhUkCTWP_d_vwR3ecicphdohSb7vXLJRBBpNaqxgCQB45hW_1QUedOroIT43ZUxUb2rMSw%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpL-qMJam6dtNTbgHnwG5h8OFIXpw-JAxtTp2jc6ZHKkIi8PhoacpShOrvg8TrfyelUIp6zhli3LugnMf0S2vNFr-25PKuft3Z72vaKdcwuenXgCqjurmn080S2anx6ZOGojkBBTO0Bio_hfyISdYkx9AM4GRHcrdv5SJIEpziw7J_wLtNI0r8WQ4PNwDI_04cvYEndncQ92rpONYt9ULeauH0d9TmLq3-xmnOCcESi8l9cMCI146-dZ5WgIE2RmYpSInJDDcLIv7orwlWAE7XSUcbV8u1fpvmMYQhXmygn1RqZAFy_4VZYEQjHsfLIxxRtV37gJpWlngl34NyVS1xMFSEm_QQu8esAqKzoxJfunq_ZLTjHnIdETaRPkxBGAGB5yH1n0mnv67jGS_bf2nd_A%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpL-qMJam6dtOl_etHAJ_PeRtCac025a4hhX0Ff0xNTpAfFB5sQYEkyPRTVfaW3CyOe3ceLKUCAdjasNRP1UZd11Vdrh_JlZV2twvOG6-3gdFAkeMUhTAJoe_BlTQ1Oaq29CgjE4JZG-7AQ3g9R--CS_GXja-78BQSQ3Jl-xlvD9BJLAna8Py_BeXyLBk3DFqXIY4UARJ8kiJbPGej9uhjTPIcT97orb66_3mSUigSFTxfzQWxxtUsw39IirvrSWXVZ8Q3ZkbFf6-_ykYciSFiRIs-3BZg3XutKvpjApAm_rMh6FdY-D7odCZwgBF6vvwVdS4suefSFUHJozRjgOT6VlatqLFXEhboqRDwsfZDY7Qm67Hqrtzvya-zBLFN205nwJdRWiLVoPRH5REmFgvC3w%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpQX5I7TjPfDOwi0y7OWeXC0CYNTjv4w2wkP1q6o095Ia7Hs-U5x6P1K5kZNiZvG35B3F2V27Mc5cYQ7_gMliPwz0pgoGHyq8EdUzQ9zqbJq_sVgBqdHvV6VjfFC9CrYl6HDGVjpIrKNjRa3pBjiH2MyhNYdXDyH96ypQXDkfIslx_odP7_08UbWq7xETKxrxLald6wG9_tObKVoMrAR91Jn-1aQdl9_iTTRZWH5dScMzOJ4DlGIB5HArAYY4S9dgLGRdmx3RxBYUnIwJClRclNhhvBa06I5ezHb3MxpIqZLUgV1eEC-2H2naAIUEHDBIa6oXp2CrFF2NXDADLExXHuYd8LJ2bCz_SFqRhQbxmrSNkUg3_JRhl4mHSWB0I9raJrJmR24oWjFvAKsMi6jJT1Q%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpQX5I7TjPfDN1pl67IrHrZmVLdsFanErENh2ZpuCeoImI6BwnLkwIxiQJBHReTReujRwl7mkDxPlVUsm-rpVV_SFT-qTBVe7jxQ7xaK16mSwSJZ68gf88ebOQa8QiCwstVjdu67eBGVLLNlEzqZwWMrWbAjxd4lI9q4VS5OMON_HSXKTLHjnTxjOHI6bi5vd9skbpgDLVloIs0sgB2RR4t-DJYoLq-LdO8nRsQTJrvc4ueES4oYlkFwp5wvBCIqu4TwqFI-WuAAn7AUthDJ7OqpBeZ4co0XeFNAKXiN-uPmGfRcvzL-GntVZnLXNRpwYBEd9V2zjRFxvwpBb19DrP91YNY65ZXD10tW758c6n9_Sj4NfP4MZAgUekN4jNKuMRIOStvomBYznVmpdT-v20aQ%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpQX5I7TjPfDO1xAdmI2GOwHtPpUgAVguK8rcCI7sGhVmpmsiRPKZyboXN84NkPFM04Don-WGd68NNs0TFHvbL54H4EQNP8bV7mr5aSauqgifShps8pskJHLtwnhvaBr0ytR9n1Sm5ULF-zlGlR3tLettr-4tLMROyXTpstmw0bKwuT1LiAgth4w9BnJaM1ZlncbPCNlDFuRw0HNy-9Er4MJKWeYUNjz2LfoXXIDqhxyEEiz0ErhPylByB5NTrhkvvv8aOT5QZ5uXgC7nKlOUekv3RiAXXWf1b7YdPKkzyg1Ih2r4dxbebNi7ZlnqG5YP9B4UtALd3iVdvgcyrDdqy9XqvtxLdqSq7DOTYUog51BftSBv84DGfNXAZhl-BzPNQMn5l-cOPymq0cQ2w5sl5rw%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpQX5I7TjPfDOBcoO0DGmG23UjrCjkn3d0mevi4JOaPRqfIM_ToGwIz9fSgxubTdAjRD2ki7R8mxD6jI9-vJ1pvKasx3X5ggHyLafIjej-BjPP6_ivzk2nW07G5cxWz1vbQZ0ZtYkPdu5P-9qlAI_J0FscoMGkNVArqOJWuNoRh0PXLutoMaDkuIT4qJwCIoHqXBLAiW-mpq9uR2t80Faq0cpNwKIEfB0X49VwHhmmCcvebmHOWpb1TWfqyPesUR-efVSQO6qqsb5PqkDxSyGF_q9ryFGuJcGWz10UxtHsBAg2qQdlQwiY4CkeMC4DxqmTkfsjOrI1ncEl-dJNpES36tTqJWGPkc8dbadKRrD_svzWJcw-l5D3wouNvW2vkAH1JcGli__Grw265mH1OVjg_Q%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpyd1WCH0OY28iD22gig1dGh_gbhgEemFL2wXMNTaRRl_nrZ3Le-VlvgYJ5o3JN6RyOqzYhAEkQuh_Mv7zYI0uVpWeLd2uwD_7zzqPg6D2gvZK9tKYzPeUhQFadF15OdUnWJPOq2XpUS4phsVc2_yCxgkbZp2xs4htTqWCJ5hfyoBGYhepb5AHzscgPs2w7XysMh8VeX4Y1SaAwmBQyinLfrVKpM6LIWJJfsqrprkNW4SSzjm-JbuO2QHFRJWpr5vI4qB1zxTO7huMVAUjdlTjy4eeS1hi2kVkRR8ka4AHZmV3oFHovKQgAnO9FEuRzgtcrUzRSphunu4H8ONLzjCpli8oPh1XT2LAp-kptxDF6_OXdB66NEs57HWqFLZsX2pqPeWBfx23LIyZg8wD_SzCkA%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpyd1WCH0OY2-XBZzYl6xXx_HwVyslsVXqAjGfL6Rf6GGhs6aw_MdYUY9Pa5LP792QGXCmSAxBqxbxGaQA3lJmTRlcbubhpGK-fd2xyPne0S74S_LXEbpuKIhvg-H0YHcT--6xSN7kgcXlDbgi_YLCGNJkycQttdMisiLGQ_NGikRBDjZO2ifbYGPjb-4UOIS70AZ02DDz5aq6D1b_M5ow_WGkuWBgvCslVQ76DYzeU0_kXYLpYk4STTt25xToAqbB9_ODte63q6J6Rv4Urwu4JVQsRVdqbce6C3WsWVhxJy061AYm0_zpGVN9LAOE-JdA46ljgF-t-kqpK35ZU05xiBCGhDg3ONv4JW-fpQNheB_95MYKH9QQIIuMK78mvVE3IpDe2kiDGsneP2OA_lHTbg%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpyd1WCH0OY287BH69_2DWlN08SY_wfRe43u-bdnO59-y0zm0lCUEVRNh1zvnFVBxhZ6PgkxA_oUytItLOK9zxNLglIPEfrRuNA1m5K7baeTTVONuDNWIOOPESnS564EdlXFp-jfnXQ16nCtfabuWpJyzt1IKOTV9QrxWkeu0H3bsyAH60lWRGDuDE71brLQjfLcpbkCP3jtpIQ0PFLUTVfIcAKaY3dJtWE1Ho2E8afwzz9imBOGGgNHiVOV1N0SgI8OK5qBL4B3Q7LGddO1xDjp-DF2OX9NmyXDnnBOjkBfz95yJZwRy4jnWQnk39fcbW9lpIiDqNnqAz03VOvfppHkhMd_ygCBwXx_TpXi7uSIQwFPCusfd493JJ80MSyUhnVgTekZoSgDLJ4oN54eAS-g%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpyd1WCH0OY28RX18LwP2BndqT9JCZOZqnPW7OkeE57BAZtsmUfcMGCtLExnT5RG_7TDtEaXHDOry5WSEvr_4QdYwpKOPyC8YNs0iJaR0f-hYpfOz_2NEHNs_DQd2b7yujHuXsuHjXrSXS1YMiF2dWvQ_Hj5D6-y0_WHpItpPG8pUdi7JaIhuUeO27ZUDM--SrSCaJL2i57mrguV32F0qjyab25O9A9MGi0r7AfixFdGVTTVuwHknaw-Pvn99GIvfLMJfWGVZlwVV5-slyR7jcwUfI1hqhoLaDkGjCb44855_6c2aZt7EaGg3O-_3KUWMGogTuvdius2rGf2-OWuOLGLP1aV8UtBiHu_IpywXNLO_gtxgMDKhN6LQKGB1wg9Kh7fB4OLNPfKaU4Av9i6-ZaA%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpyd1WCH0OY28GNac_Q6O1B685plfQIsB9lUbKyOCNn8WxvImadl6Sfimyxm-aeH1wI7BsoMpfvFlI-QQ123yRwSB7v6pRWZVPrFF2GKNZHbj-8RDlqYTp5qXko_LnKcPvGo6x2F0LjHJyUKazc-8HcmJBe8Ok4HQRPZwqmIPbUCUvstSLea1VRVn3A7122VkCUJft7_5W_AM0P8MIWE8ETgZvo1uMZKoEmJiSiCz5igoKCGGeXyT1j0DuEbCfKPGnfjgmTgbToOiCSlr5-pRotPhpIf53biIchysEeBndEU9RhSuVxtOSVfs00G3x53M-ZWfa6Z-QTHwP74hJn_tvYEeTjF3nJ0Jl_ax-xKLcCNFRXKpfBIWEEBhb6LDeJblGNoopZ7Ou6IFo-7ruxnsudQ%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpUjkiqUmb1gqFa157CMl2ymzv8diJg2sfm9SHRBXFTF6y0P5p5PwlmFfPPe1Qk9bea6zwBc9gaHXyO2J674tDl6RfZb7ZXt7NRNFomA4KGxCduuEexxghot7CDtM7a5PeBonrMg7s6S6kGta-IIWOvkYMMJjceVzxZoVFV-n59WuYJYegu6LUmNJiGPOlK2dnxc1aJ__lN9ViajeCJA0iT-zrxHGFn3w0DaothAsZMRU-264VokEwlyl9o4r_G9mu6GYv-r7y6cOo12UMGq5HTMY_BS6ovtZmkP1bwgaNNBWjixX4zaEkfaIwc49eFNpCO21D8EKAxjwhCoDd7KRy85U8G38pDUbvVJNyTxsgmQwgVt-dfXNDDL-KEVsxIciUUb6utMKhWGyWuDg1fi1Jdw%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpUjkiqUmb1gp3f8QFTvNhV-A5hAyPRGBkQqO8HgLPc6NXQ083ndO-JGKljgA02Um-LxVe-DFk9gmbtOABYf9DlTnjnrBHXx1G_S03TH8h_xhj_O8-Z0hnmiVscHOLoVuiqzPz2iK9iZFWkbO7KCkpm8N9mZgCGEU6qZfUhtDb1xDPCJ-_hrivZuiYb7T9VG9mQZaSbgTqmVD66jtJrxWEDJeZjZ9aFxyaoosQ0iFPgdMhVzooUYeMl8T_abXmznyhrPBBhxDvhlOib_H-I3oYFZVrrL9NcG2W0eI83JodiNt8d-j_guyBIUSNCM_fsEeY6B05OS2UqhnqWBAAO4ed-cID5MyQQIKhoUCxNW-14CxahcG93EIMP808aSe0ktja_t0D8xk48wPiOjq3CATcBg%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpUjkiqUmb1gr-oKBvs_AEiiaC9cVpPXyjUFA2Z_I-Q5aD9Ffk8BYQJ5uZekIyfIx2JWDcNMjBR92uxEkipt2GYyoKSZGiOTi6selnltwMzwPR-VcpF3wwv7vUkUMT-cuwfPFvXTmC-0o-8wIVzn8Y-vvqfwb0fqQ82i0ThVrbp0FLzk9LWRA9oq0XZcDXaDb-6_LPOK2IJ9VxoJ56JW5J1ffswD0L_gWqSPUgJsxCqFVyKFgMmkO_j9osmBLZ2rROKal9xxIKucIkxiSQXxNMw0-JrIjDI6PXkfP-Qkye2YLVX92Y_7z-SXWcYM8MVlK_i5TnTHz9hjWoVfser4xJwk7cuSoJ4BX5AyON8BpHGC2JTYJ1DqxSWXL7Z_3BSgHkrbrR0cek4KAtheM85Wu0ig%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpUjkiqUmb1gpCvuAti-eNitFV-kcuQ-_G9Qsvc_fnXYNbDuQU_wbCaBDfUYgypGwAIjrKW9fgaPZB7S74zR8X87VIeMYDSihSux0RcGPtk3f_rNduzOP2yrK6uYJR_cE6UtWX-j1er5H8srSfXXA-V8onoIhgnpRUA3kfi1tIZgm7Kk2eLZX87T-kdmnKT6mOlZ5Lltp24GGJX4YI_LNf6Ct9FK7BqDW0zp-f5ra4xQCeJShwHRfx-vUBj__3EwNMf6ZIBdscn0v8Qk8dC5WQIuwn8otQfeNm21dXRFWswVb5Az7UIFg1BSNfguguVicmJBu_Ah1cKmteXsAHdMWycySYezrvRvgZbCm21w0NzpMlE3yYsaBVcxjxb7dfx-gd7W4mB-y5kcEtnbwwJRvsxQ%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpUjkiqUmb1grCWizeWGepsb8i2kzRIHnDXu73_IRts6PvL-zSSyDvLemDHoDvM8DknnidtN45xmfBqNQlU3K_zF5g3iWZoyGGkJZ0m9vqCum3qggaF4PZfkCIfzekb_hw9GAaqvgOpoZCWx8oxNctQMfgIX73Rt7QAsHvbL51OWENmQBWupjFnwb4BqkRjX-NXKlRLR6qPpOhPwoqi5x_g-4Ti1Sc5zuKSQSEpDwv248MIjhloM0XsixOHmxWSKASYU6iy8lPI-8HF6E4i91rLWGeg2sI1ikc69uNNvFagJuQ6gCFh3v-aqThYP7jMGBMYHScU2FUB11Q3oC6WFVYLSeUh_S4uCFtELdiV8y_5KZuAhN6PjhRxJOqLoO3y9DQciH_WjL0m-QdMjrsPcOBWA%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpUjkiqUmb1gqB6KQrM9tLvQaJSxU1df_A7gb73p_RI4tuPAM2sYJZ49RXGgkWtBle6thagRPyuIhXB_xMlH_SHIix1Ic_i6JjhIJHbftQ71R3aaXgV4Y1h0zyjzUaQjn0NJB_05cc93dZba0cQd03yPvST-y2uWJoySAOX5JmWwPDrWOxxeeCWG-B-W_O2qOOcdWEXcphxRQXnp4e3uMIGxWapawWmbeKNQ4JBrQqVOOrqxqtBoxemEBJ0ZKR86gjqC3S-dQfgvypyFznwyUQkxTWiSnByArRmXo0p5zC18VsXiwIH8MCjRljwwaIg0rlwBEzNCREeVfdKDO1goNB4pNztFCqbXTqBjTEg7cnu_KexmMFPR2xnmBaKz9C-a2YCYweKgLOn1exDHGMayGH4Q%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpUjkiqUmb1gqY_Qx8f5P2zMOt_40U3vLzLmUMjuU0ZMdVssOVWbeYSL4KvquMOlkHIAEYqjAVJvjEGCqjaj9iYZwjSecuo31mZphq0m1RxvR5cyhupzqHUJeyakV2Dw4LjEmOpYy0bVZLdaNW7mdoXIoMX_j7gb9wWV4kVZ0MUvlCMFQn5h6zztGy1g4UrCeYJduDmSgMmylDjOJ439T_7bf9VvO3jRtsvVufQPGWjmGHKR8ydK34qVAtrXyu0tdTnRYPqcKAK86vyA3ZZ6J_oEHu2fH9-liwe4yD5Adhdlb-1861U9G-QjWkQDsirkhBlTkREiFxxsGAQcIu08ydwsoRJ0ODFfdk29nHGODdz-fC9hST33fCPb-rZuxruiXnjLXAIpJMhgBpfighH6WHlQ%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpUjkiqUmb1gq3Q6XYmpvY6iTNLU6wgSnXv27NNU2c6bPk22-SNu8UlvoLDdWV7JhcX5umBfZpnlm9Iq0XCH75JapJwW_gf3ye5TJ5t79VBR6kv-bwxmhR9dQ6KYmzI0f_I5d4PE8hO7O7niTh4KBlXArUv_vCj4lqnoG9FztH_Jzx5WmdPnKJuxZQecZIbuMMm0slvuJ8HsstvmBpg6tU341kYjvMX1RgZvg6FbxWMWsg3HFCvUYVS8TW2B5S_O3YpqvpKfsG7kJeT7WIvuUp5Pie_Th04CEkq0lblMXh_8-fQe-9lSxZpFHMIqLBQlA-CunZM5m1UBCgQKr2jBHEDKfJac9N6APZHZNCxi3XWEORJW9T6Z2ajRyQ0MwzITRWpkZUGhlvmCtocbL3NSn6Yg%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpUjkiqUmb1go4mhBo_OTKvE1X8fvP0yamUTB7swJVh2ZGMWNuJ2PNuq7wL72uZdWuoddn28bZbkf-Tx7QVK3hoeaa2PT-Kk62Q5qufITPdXFJlhXjj8V0ERJiACZtQBvHDg4bMzRg6meY3qZXvoXw3F8t4KMzbBtDQwY26u-ruKAyZNYgtc3a3hcwLE79NslX0kYr2_ScSfc7TyLutQ3fQK0_pHpuZ8JpUm8L4Fi-JngynVP0b-m_Tem0-gQ29LtEZexpuDC2SZ5OXGpJK9PkTn_lEh6DC8XZqv7spuUG1RTfUuouAAf4XqiIay8a15MrJrwsbLscDadhOQVH9jqr5D-1AZq-4cqpRCR-rXDa_2cpiPo1qvGS2T9FNDCK1OG7vpLAfAc__8Ql-tmtfPfkhg%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0Ggew9xh9ROBgqL7XsRGwIUM89ARbRMgpUjkiqUmb1gojQgDfNsfNicC7AaQcvQBL5vYx6I4ykfb2lfX53gremUwwOSmQf8fs7tQcDvzCzgZQmNUWdMhkuN4QFm51g2g1g_0Y9gMEs8U9mkcVD-BCmP-5QDi9uZ6m6khy1F6QpKwVC-q_NojBh6IVus3HGz4ydtix0yz3WeA2Jms51cvXPlru-BiUb8WAwhpd8eBSSKUscVbgbPfc-ZvrQqNddiXapCNFgqU0zqPkWt7a3dA-TNDT6Bl-itS1egu78EU58IWaDUU9NI-JqjLMlxzux489Q49A6a0bRI98kOvIVCrwuT5b5AjVbHxabiuTMq3tVFRvRvOuQx1lA_Fvpj5t_JBo9TDczlYbnLsSp0RXStpaYFMDil0OpO8K6InMEEgljLqqzz75QybmNg%3D%3D'


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
