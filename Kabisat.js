/*
 ## Tahun Kabisat ##

    Apa yang kamu ketahui tentang tanggal 29 Februari? 
    Kamu pasti tahu jika suatu tahun memiliki tanggal 29 Februari 
    berarti tahun tersebut merupakan tahun kabisat.

    Dalam kalender Gregorian, tahun kabisat memiliki beberapa kriteria yaitu,  
    antara lain:

    Jika tahun habis di bagi 4 dan 
    tidak habis di bagi 100, 
    
    atau

    Jika tahun habis di bagi 4, 
    habis di bagi 100 dan 
    habis di bagi 400


    Buatlah algoritma & pseudocode untuk menentukan apakah suatu tahun merupakan 
    tahun kabisat atau bukan!
    

    Algoritme mudah untuk menentukan apakah suatu tahun termasuk tahun kabisat atau bukan 
    1. Jika angka tahun itu habis dibagi 400, maka tahun itu sudah pasti tahun kabisat.
    2. Jika angka tahun itu tidak habis dibagi 400 tetapi habis dibagi 100,maka tahun itu
       sudah pasti bukan merupakan tahun kabisat 
    3. Jika angka tahun itu tidak habis dibagi 400, tidak habis dibagi 100 akan tetapi 
       habis dibagi 4, maka tahun itu merupakan tahun kabisat
    4. Jika angka tahun tidak habis dibagi 400, tidak habis dibagi 100, dan tidak habis 
       dibagi 4, maka tahun tersebut bukan merupakan tahun kabisat

    Setiap tahun yang bisa dibagi "4" adalah tahun kabisat. 1 tahun sama dengan '365 hari
    + 6 jam', sehingga sama dengan 365 1/4 hari. 
    Setiap 4 tahun, 6 jam akan menjadi satu hari (6x4=24 jam). Oleh karena itulah kita
    memiliki satu hari tambahan pada bulan Februari. 
